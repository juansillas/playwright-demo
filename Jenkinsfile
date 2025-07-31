pipeline {
    agent any

    tools {
        nodejs 'NodeJS 24'// Asegúrate de haber configurado esto en Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/juansillas/playwright-demo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
            }
        }

        stage('Publish Report') {
            steps {
                publishHTML([ 
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Reporte Playwright',
                    keepAll: true,
                    alwaysLinkToLastBuild: true
        ])
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '**/playwright-report/**', fingerprint: true
        }
    }
}
