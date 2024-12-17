import * as dotenv from 'dotenv'
import * as path from 'path'
import * as nodemailer from "nodemailer";
import { __dirname } from './util';
import { SendMail } from './interfaces/Mail';

dotenv.config({
  path: path.resolve(__dirname, '..', '.env.local')
})

export default class Mail {

  static async send({
    from,
    message,
    subject,
    to
  }: SendMail) {
    const bodyMail = {
      from,
      to,
      subject,
      message,
    }

    console.log({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: { rejectUnauthorized: false },
    })
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: { rejectUnauthorized: false },
    })

    console.log({ bodyMail })

    await transporter.sendMail(bodyMail)
  }
}