# AWS SQS Email Queue Project

This project demonstrates the use of AWS SQS (Simple Queue Service) for sending emails on demand. It includes a basic setup for creating, sending, and receiving messages from an SQS queue, and sending emails using Node.js and Nodemailer.

## Project Structure

- **src/util.ts**: Utility functions for path resolution.
- **src/service/sqsService.ts**: Service for interacting with AWS SQS.
- **src/provider.ts**: Script to send email messages to the SQS queue.
- **src/Mail.ts**: Class for sending emails using Nodemailer.
- **src/interfaces/Mail.ts**: Interface for email message structure.
- **src/consumer.ts**: Script to consume messages from the SQS queue and send emails.
- **docker-compose.yml**: Docker Compose file to set up ElasticMQ for local SQS.
- **.env.local**: Environment variables for email configuration.

## Setup

1. **Clone the repository**:

    ```sh
    git clone https://github.com/yourusername/aws-sqs-email-queue.git
    cd aws-sqs-email-queue
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env.local` file in the root directory with the following content:

    ```env
    MAIL_HOST=smtp.mailgun.org
    MAIL_PORT=587
    MAIL_USER=your_mailgun_user
    MAIL_PASS=your_mailgun_password
    ```

4. **Run ElasticMQ using Docker**:

    ```sh
    docker-compose up
    ```

5. **Run the provider script to send messages to the queue**:

    ```sh
    npm run dev src/provider.ts
    ```

6. **Run the consumer script to process messages from the queue and send emails**:

    ```sh
    npm run dev src/consumer.ts
    ```

## Improvements

1. **Security**:
    - Store AWS credentials securely using AWS IAM roles or AWS Secrets Manager.
    - Avoid hardcoding sensitive information in the code.

2. **Error Handling**:
    - Implement better error handling and logging mechanisms.
    - Add retries for failed email sends.

3. **Scalability**:
    - Use AWS Lambda for serverless processing of SQS messages.
    - Implement a more robust queue processing mechanism to handle high loads.

4. **Configuration**:
    - Use a configuration management library to handle different environments (development, staging, production).

5. **Testing**:
    - Add unit and integration tests for the SQS service and email sending functionality.

6. **Documentation**:
    - Add more detailed documentation and comments in the code.
    - Provide examples and use cases in the README.

## License

This project is licensed under the ISC License.
