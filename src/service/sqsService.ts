import AWS from 'aws-sdk'


AWS.config.update({
  region: 'sa-east-1',
  credentials: new AWS.Credentials({
    accessKeyId: process.env.ACESS_KEY_ID ?? '',
    secretAccessKey: process.env.SECRET_ACCESS_KEY ?? '',
  })
})

const sqs = new AWS.SQS({
  region: 'sa-east-1',
  endpoint: 'http://localhost:9324',
})

export const createQueue = async (queueName: string) => {
  const params = {
    QueueName: queueName,
    Attributes: {
      'DelaySeconds': '60', // 1 minute
      'MessageRetentionPeriod': '86400' // 1 day
    }
  }

  return sqs.createQueue(params).promise()
}

export const sendToEmailSQS = async (queueUrl: string, message: string) => {
  const params = {
    MessageBody: message,
    QueueUrl: queueUrl
  }

  return sqs.sendMessage(params).promise()
}

export const receiveFromEmailSQS = async (queueUrl: string) => {
  const params = {
    QueueUrl: queueUrl,
    MaxNumberOfMessages: 10
  }

  return sqs.receiveMessage(params).promise()
}