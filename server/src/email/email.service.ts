import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as fs from 'fs';
@Injectable()
export class EmailService {
  async sendEmail(email: string, res): Promise<any> {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'manh.ld2402@gmail.com',
          pass: 'tpoqhpyqmhufoscl',
        },
      });
      const html_content = fs.readFileSync(
        'C:/Users/MSI/Desktop/PRJNESTJS/server/src/email/template.html',
        'utf8',
      );
      const mailOptions = {
        from: 'manh.ld2402@gmail.com',
        to: email,
        subject: 'THEGIOIDIDONG',
        html: html_content,
      };
      await transporter.sendMail(mailOptions);
      return res.status(200).json({});
    } catch (error) {
      console.error('Error sending forget password email:', error);
      throw new Error('Failed to send the forget password email.');
    }
  }
}
