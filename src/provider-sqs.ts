import { sendToEmailSQS } from "./service/sqsService";

function provider() {
  const listEmails = [
    { to: 'email@gmail.com', from: 'email@gmail.com', subject: 'Teste', body: 'Teste' },
    { to: 'email@gmail.com', from: 'email@gmail.com', subject: 'Teste', body: 'Teste' },
    { to: 'email@gmail.com', from: 'email@gmail.com', subject: 'Teste', body: 'Teste' },
    { to: 'email@gmail.com', from: 'email@gmail.com', subject: 'Teste', body: 'Teste' },
    { to: 'email@gmail.com', from: 'email@gmail.com', subject: 'Teste', body: 'Teste' },
    { to: 'email@gmail.com', from: 'email@gmail.com', subject: 'Teste', body: 'Teste' },
    { to: 'email@gmail.com', from: 'email@gmail.com', subject: 'Teste', body: 'Teste' },
    { to: 'email@gmail.com', from: 'email@gmail.com', subject: 'Teste', body: 'Teste' },
    { to: 'email@gmail.com', from: 'email@gmail.com', subject: 'Teste', body: 'Teste' },
  ]

  for (const email of listEmails) {
    sendToEmailSQS('http://localhost:9324/queue/email-queue', JSON.stringify(email))
  }
}

provider()