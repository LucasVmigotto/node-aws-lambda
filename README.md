# node-aws-lambda

## Development

### Get Started

1. Copy and rename the file `.env.example` to `.env`:
    > Customize the values as necessary

2. Run the project _API CLI_:

    ```bash
    docker compose run --rm aws-lambda-api bash
    ```

3. Install the dependencies:

    ```bash
    yarn
    ```

4. Build the project to generate `.js` dist files:

    ```bash
    yarn build
    ```

### Start the services

* Start the API locally:

    ```bash
    docker compose up aws-lambda-api
    ```

* Build the AWS Lambda Docker image and run the build project inside it

    1. Build the Docker image:

        ```bash
        docker compose build aws-lambda
        ```

    2. Build the Docker image:

        ```bash
        docker compose up aws-lambda
        ```

    3. Test with a simple request:

        ```bash
        curl \
            -X POST \
            -H 'Content-Type: application/json' \
            -d '{ "name": "Lucas" }' \
            http://localhost:3000/2015-03-31/functions/function/invocations
        ```

