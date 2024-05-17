pipeline {
  agent {
    kubernetes {
      inheritFrom 'base nodejs'
      yaml """
spec:
  containers:
  - name: nodejs-with-git
    image: 3its/node-with-git:v18.19.0
    tty: true
"""
    }
  }

  environment {
    KUBECONFIG_CREDENTIAL_ID = "kubeconfig"
    REGISTRY = "127.0.0.1:3380"
    REGISTRY_NAMESPACE = "template"
    APP_NAME = "7TD"
  }

  stages {
    stage('clone code') {
      agent none
      steps {
        container('base') {
          git(url: 'https://github.com/14bytes/7TD.git', credentialsId: 'gitlab-credential', branch: 'master', changelog: true, poll: false)
        }
      }
    }

    stage('package') {
      agent none
      steps {
        container('nodejs-16') {
          sh '''
          pnpm install
          pnpm run docs:build
          '''
        }
      }
    }

    stage('build & push') {
      agent none
      steps {
        container('base') {
          sh '''cat >Dockerfile << EOF
FROM busybox

COPY docs/.vitepress/dist /dist
EOF'''
          sh 'docker build -f Dockerfile -t ${REGISTRY}/${REGISTRY_NAMESPACE}/${APP_NAME}:${BUILD_NUMBER} .'
          withCredentials([usernamePassword(credentialsId : 'harbor-credential' ,passwordVariable : 'DOCKER_PASSWORD' ,usernameVariable : 'DOCKER_USERNAME' ,)]) {
            sh 'echo "${DOCKER_PASSWORD}" | docker login ${REGISTRY} -u "${DOCKER_USERNAME}" --password-stdin'
            sh 'docker push ${REGISTRY}/${REGISTRY_NAMESPACE}/${APP_NAME}:${BUILD_NUMBER}'
          }
        }
      }
    }

    stage('deploy to k8s') {
      agent none
      environment {
        VERSION_NUMBER = "${BUILD_NUMBER}"
      }
      steps {
        container ('base') {
          withCredentials([
            kubeconfigFile(
            credentialsId: env.KUBECONFIG_CREDENTIAL_ID,
            variable: 'KUBECONFIG')
            ]) {
            sh 'envsubst < k8s.yaml | kubectl apply -f -'
          }
        }
      }
    }
  }
}
