import { SQS } from "aws-sdk";
import { receiveFromEmailSQS } from "./service/sqsService";
import Mail from "./Mail";


async function consumerQueue() {
  try {
    const response = await receiveFromEmailSQS('http://localhost:9324/queue/email-queue')

    if (!response.Messages) return

    const messages: SQS.Message[] = response.Messages

    console.log(`[EMAILS RECEIVED] => ${JSON.stringify(messages)}`)
    // for (const message of messages) {
    //   const mailOptions = JSON.parse(message.Body ?? '{}')

    //   await Mail.send({
    //     from: mailOptions.from,
    //     to: mailOptions.to,
    //     subject: mailOptions.subject,
    //     message: mailOptions.body
    //   })

    //   console.log(`[EMAIL SENT] => ${mailOptions.to}`)
    // }
  } catch (error) {
    console.error(error)
  }
}

await consumerQueue()