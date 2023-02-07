<div align="center">
<p>
    <img
        style="width: 200px"
        width="200"
        src="https://avatars.githubusercontent.com/u/4426989?s=200&v=4"
    >
</p>
<h1>Awesome NaNLABS</h1>

[Changelog](#) |
[Contributing](./CONTRIBUTING.md)

</div>
<div align="center">

[![Markdown Lint][markdownlintbadge]][markdownlinturl]
[![Shell Check][shellcheckbadge]][shellcheckurl]
[![Tensorflow Check][tf-checkbadge]][tf-checkurl]
[![License: MIT][licensebadge]][licenseurl]

</div>

This repository contains different infrastructure components, CI/CD pipelines, automation tools
among other resources that are used in different projects here at [NaN Labs](https://www.nanlabs.com/).

- [Applications](#applications})
- [Examples](#examples})

  - [A/B Testing](#ab-testing})
  - [Shell Scripting and Utilities](#shell-scripting-and-utilities})
  - [Continuous Integration, Delivery and Deployment](#continuous-integration-delivery-and-deployment})
  - [Containers, Orchestration (Kubernetes, ECS, EKS, Fargate, ...) and Serverless](#containers-orchestration-kubernetes-ecs-eks-fargate--and-serverless})
    - [Containers and Compositions (Docker, Docker Compose, Buildpacks, ...)](#containers-and-compositions-docker-docker-compose-buildpacks-})
    - [DevContainers and Codespaces](#devcontainers-and-codespaces})
    - [Kubernetes](#kubernetes})
  - [Infrastructure as Code (Terraform, Serverless Framework, ...)](#infrastructure-as-code-terraform-serverless-framework-})
    - [AWS Amplify](#aws-amplify})
    - [Serverless Framework and CloudFormation](#serverless-framework-and-cloudformation})

- [Contributing](#contributing)
- [License](#license)
- [Contributors](#contributors)

## Applications

- [Complete AWS Glue ETL](https://github.com/nanlabs/devops-reference/tree/main/examples/_apps/serverless-glue/) - A complete example of an AWS Glue application that uses the [Serverless Framework](https://www.serverless.com/) to deploy the infrastructure and DevContainers and/or Docker Compose to run the application locally with AWS Glue Libs, Spark, Jupyter Notebook, AWS CLI, among other tools. It provides jobs using Python Shell and PySpark.

## Examples

### A/B Testing

- [AWS CloudWatch Evidently](https://github.com/nanlabs/devops-reference/tree/main/examples/services/aws-cloudwatch-evidently/) - A complete analysis of the service and a Proof of Concept on how to integrate it with a Node.js application.
- [Feature flags post](https://www.atlassian.com/continuous-delivery/principles/feature-flags)) - How to progressively expose your features with feature flags by IAN BUCHANNAN.

### Shell Scripting and Utilities

- [Bash as a Wrapper Utility](https://github.com/nanlabs/devops-reference/tree/main/examples/scripts/bash-as-a-wrapper-utility-basic/) - Bash as a wrapper utility for other languages and tools.
- [Bash as a Wrapper Utility with Easy Options](https://github.com/nanlabs/devops-reference/tree/main/examples/scripts/bash-as-a-wrapper-utility-with-easy-options/) - Bash as a wrapper utility for other languages and tools using [Easy Options
- [Easy Options](https://github.com/nanlabs/devops-reference/tree/main/examples/scripts/easy-options/) - Easy options for shell scripts.
- [When to use shell](https://google.github.io/styleguide/shellguide.html#when-to-use-shell) - A guide from Google on when to use shell scripts.

### Continuous Integration, Delivery and Deployment

- [Actionlint Playground](https://rhysd.github.io/actionlint/)) - Static checker for GitHub Actions workflow files.
- [Automation Seed example](https://github.com/nanlabs/automation-seed/tree/main/.github/workflows) - This example contains the following workflows:
- [Markdown Lint](https://github.com/nanlabs/devops-reference/tree/main/.github/workflows/markdownlint.yml) - This workflow validates the Markdown files in the repository using the [markdownlint action](https://github.com/marketplace/actions/markdown-lint).
- [React Webpack Boilerplate](https://github.com/nanlabs/react-webpack-boilerplate/tree/main/.github/workflows) - This example contains the following workflows:
- [Shell Check](https://github.com/nanlabs/devops-reference/tree/main/.github/workflows/shellcheck.yml) - This workflow validates the shell scripts in the repository using the [shellcheck action](https://github.com/ludeeus/action-shellcheck).
- [Terraform Check](https://github.com/nanlabs/devops-reference/tree/main/.github/workflows/tf-check.yml) - This workflow validates the Terraform files in the repository using the [terraform action](https://github.com/dflook/terraform-fmt-check).
- [Todo to Issue](https://github.com/nanlabs/devops-reference/tree/main/.github/workflows/todo.yml) - This workflow scans new commits on the main branch looking for `TODO`s in the code and creates new Github issues.

### Containers, Orchestration (Kubernetes, ECS, EKS, Fargate, ...) and Serverless

#### Containers and Compositions (Docker, Docker Compose, Buildpacks, ...)

- [Airflow and Spark environment using Docker and Docker Compose](https://github.com/nanlabs/devops-reference/tree/main/examples/docker/airflow/) - Dockerfile and docker-compose.yml to run Airflow locally with initialization scripts.
- [AWS Glue using Docker and Docker Compose](https://github.com/nanlabs/devops-reference/tree/main/examples/docker/glue/) - Dockerfile and docker-compose.yml for AWS Glue development with AWS Glue Libs, Spark, Jupyter Notebook, AWS CLI among other tools.
- [AWS Neptune using Docker and Docker Compose](https://github.com/nanlabs/devops-reference/tree/main/examples/docker/neptune/) - Dockerfile and docker-compose.yml to run AWS Neptune locally with initialization scripts.
- [Localstack using Docker and Docker Compose](https://github.com/nanlabs/devops-reference/tree/main/examples/docker/localstack/) - Dockerfile and docker-compose.yml to run Localstack locally with all the necessary services. This example also includes a script to create the necessary resources in Localstack. The provided examples are for DynamoDB, S3, SQS and Kinesis.
- [Microsoft SQL Server using Docker and Docker Compose](https://github.com/nanlabs/devops-reference/tree/main/examples/docker/mssql/) - Dockerfile and docker-compose.yml to run Microsoft SQL Server locally with initialization scripts.
- [MongoDB + Mongo Express using Docker and Docker Compose](https://github.com/nanlabs/devops-reference/tree/main/examples/docker/mongodb/) - Dockerfile and docker-compose.yml to run MongoDB and Mongo Express locally with initialization scripts.
- [PostgreSQL using Docker and Docker Compose](https://github.com/nanlabs/devops-reference/tree/main/examples/docker/postgres/) - Dockerfile and docker-compose.yml to run PostgreSQL locally with initialization scripts.
- [Python Buildpack](https://github.com/nanlabs/devops-reference/tree/main/examples/buildpacks/python#readme) - Buildpack example for Python applications.

#### DevContainers and Codespaces

- [AWS Glue](https://github.com/nanlabs/devops-reference/tree/main/examples/devcontainers/glue/) - DevContainer for AWS Glue development. Uses `docker-compose` to run VSCode attached to a container with all the necessary tools to develop AWS Glue jobs such us AWS Glue Libs, Spark, Jupyter Notebook, AWS CLI among other tools.
- [NodeJS](https://github.com/nanlabs/devops-reference/tree/main/examples/devcontainers/nodejs/) - DevContainer for NodeJS development. Uses `docker-compose` to run VSCode attached to a container with all the necessary tools to develop NodeJS applications.

#### Kubernetes

- [Ingress](https://github.com/nanlabs/devops-reference/tree/main/examples/kubernetes/ingress/) - Ingress example using NGINX Ingress Controller. You can run this example locally using [Minikube](https://minikube.sigs.k8s.io/docs/start/).

### Infrastructure as Code (Terraform, Serverless Framework, ...)

#### AWS Amplify

- [AWS Amplify + NextJS 13](https://github.com/nanlabs/devops-reference/tree/main/examples/amplify/amplify-nextjs-deployment/) - AWS Amplify example to deploy a NextJS v13 application to the Cloud.

#### Serverless Framework and CloudFormation

- [AWS AppSync + Python](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless/serverless-appsync-python/) - Serverless Framework example to deploy an AWS AppSync API using Python. It also has a local development environment using [Serverless Offline](https://www.serverless.com/plugins/serverless-offline).
- [AWS AppSync + TypeScript](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless/serverless-appsync-nodejs/) - Serverless Framework example to deploy an AWS AppSync API using TypeScript. It also has a local development environment using [Serverless Offline](https://www.serverless.com/plugins/serverless-offline).
- [AWS Glue with Python Shell and PySpark Jobs](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless/serverless-glue/) - Serverless Framework example to deploy an AWS Glue job using Python Shell and PySpark.
- [DocumentDB Cluster](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless/serverless-documentdb/) - Serverless Framework example to deploy a DocumentDB cluster with all the necessary resources.
- [Neo4j in EC2](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless/serverless-neo4j-ec2/) - Serverless Framework example to deploy a Neo4j instance in EC2.
- [RDS Postgres Instance](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless/serverless-rds-postgres/) - Serverless Framework example to deploy a RDS Postgres cluster with all the necessary resources.
- [Serverless Middy](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless/serverless-middy/) - Serverless Framework example to deploy a lambda function using [Middy](https://middy.js.org/), the stylish Node.js middleware engine for AWS Lambda.
- [Serverless Middy with Custom Middleware](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless/serverless-middy-custom-middleware/) - Serverless Framework example to deploy a lambda function using [Middy](https://middy.js.org/), the stylish Node.js middleware engine for AWS Lambda.
- [Serverless S3 Local](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless/serverless-s3-local/) - Serverless Framework example to run a lambda function locally using [Serverless S3 Local](https://www.serverless.com/plugins/serverless-s3-local).

## Contributing

- Contributions make the open source community such an amazing place to learn, inspire, and create.
- Any contributions you make are **truly appreciated**.
- Check out our [contribution guidelines](./CONTRIBUTING.md) for more information.

## License

This project is Licensed under the [MIT License](./LICENSE). Please go through the License at least once before making your contribution. </p>

## Contributors

<a href="https://github.com/nanlabs/awesome-nan/contributors">
  <img src="https://contrib.rocks/image?repo=nanlabs/awesome-nan"/>
</a>

Made with [contributors-img](https://contrib.rocks).

[markdownlintbadge]: https://github.com/nanlabs/awesome-nan/actions/workflows/markdownlint.yml/badge.svg
[shellcheckbadge]: https://github.com/nanlabs/awesome-nan/actions/workflows/shellcheck.yml/badge.svg
[tf-checkbadge]: https://github.com/nanlabs/awesome-nan/actions/workflows/tf-check.yml/badge.svg
[licensebadge]: https://img.shields.io/badge/License-MIT-blue.svg
[markdownlinturl]: https://github.com/nanlabs/awesome-nan/actions/workflows/markdownlint.yml
[shellcheckurl]: https://github.com/nanlabs/awesome-nan/actions/workflows/shellcheck.yml
[tf-checkurl]: https://github.com/nanlabs/awesome-nan/actions/workflows/tf-check.yml
[licenseurl]: https://github.com/nanlabs/awesome-nan/blob/main/LICENSE
