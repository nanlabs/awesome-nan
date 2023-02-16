<!--lint disable double-link awesome-heading awesome-git-repo-age awesome-toc-->

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
[Contributing](https://github.com/nanlabs/awesome-nan/tree/main/CONTRIBUTING.md)

</div>
<div align="center">

[![Continious Integration][cibadge]][ciurl]
[![License: MIT][licensebadge]][licenseurl]

</div>

This is a curated list of all the Open Source examples and projects we have at [NaN Labs](https://www.nanlabs.com/).

## Contents

- [Applications](#applications)
- [Examples](#examples)

  - [DevOps](#devops)
    - [Node Package Managers](#node-package-managers)
    - [A/B Testing](#ab-testing)
    - [Shell Scripting and CLI Tools](#shell-scripting-and-cli-tools)
    - [Continuous Integration, Delivery and Deployment](#continuous-integration-delivery-and-deployment)
    - [Containers, Orchestration and Serverless](#containers-orchestration-and-serverless)
      - [Containers and Compositions (Docker, Docker Compose, Buildpacks and more)](#containers-and-compositions-docker-docker-compose-buildpacks-and-more)
      - [DevContainers and Codespaces](#devcontainers-and-codespaces)
      - [Kubernetes](#kubernetes)
    - [Infrastructure as Code](#infrastructure-as-code)
      - [AWS Amplify](#aws-amplify)
      - [Serverless Framework and CloudFormation](#serverless-framework-and-cloudformation)
  - [Frontend](#frontend)
    - [React State Management](#react-state-management)
  - [Backend](#backend)
    - [FastAPI](#fastapi)

- [Contributing](#contributing)

## Applications

- [Automation Seed](https://github.com/nanlabs/automation-seed) - Automation Seed is a e2e automation framework built on top of WebdriverIO v7 and Selenium that uses Selenoid for execution _Keywords: Automation, Selenium, WebdriverIO, Selenoid, Allure, Typescript, GitHub Actions, GitHub Pages_
- [Complete AWS Glue ETL](https://github.com/nanlabs/devops-reference/tree/main/examples/_apps/serverless-glue/) - A complete example of an AWS Glue application that uses the [Serverless Framework](https://www.serverless.com/) to deploy the infrastructure and DevContainers and/or Docker Compose to run the application locally with AWS Glue Libs, Spark, Jupyter Notebook, AWS CLI, among other tools. It provides jobs using Python Shell and PySpark. _Keywords: Python, AWS, Glue, ETL, Serverless, DevContainers, Docker Compose_
- [Golang REST API boilerplate](https://github.com/nanlabs/nancy.go/tree/main/examples/golang-todo-rest-crud/) - REST API to create, update and retrieve Entities, including graceful shutdown, rate limiting, structured logging, unit tests, integration tests, environment variables, health check and API documentation with swagger. Technologies: Golang 1.19, MongoDB (with Docker Compose), Gorilla Mux, Go Swagger, Tollbooth (rate limiting), Zap (logging), Viper, Mockery, Makefile, Pre-commit, and DockerTest (integration tests). _Keywords: Golang, REST API, MongoDB, Gorilla Mux, Go Swagger, Tollbooth, Zap, Viper, Mockery, Makefile, Pre-commit, Docker, Docker Compose, DockerTest_
- [React Webpack Boilerplate](https://github.com/nanlabs/react-webpack-boilerplate) - A simple but powerful boilerplate to start a React project powered by Vite. Boilerplate generated using [create-react-webpack-project](https://www.npmjs.com/package/create-react-webpack-project) contains full CI/CD setup with GitHub Actions and Docker. It also contains a full local development setup with hot reload and production ready setup with minification and optimization. It also contains a full test setup with Jest and React Testing Library. _Keywords: React, Webpack_
- [Storybook Playground](https://github.com/nanlabs/nancy.js/tree/main/apps/playground/) - This app was created with the goal to have examples of ours React components, hooks and libraries that are created in different packages in the repository Nancy.js. _Keywords: React, Storybook, Nancy.js_

## Examples

### DevOps

#### Node Package Managers

- [Node Package Managers](https://github.com/nanlabs/nancy.js/tree/main/examples/node-package-managers/) - Comparison of the most popular Node Package Managers: npm, yarn, pnpm. _Keywords: Node, npm, yarn, pnpm_

#### A/B Testing

- [AWS CloudWatch Evidently](https://github.com/nanlabs/devops-reference/tree/main/examples/services/aws-cloudwatch-evidently/) - A complete analysis of the service and a Proof of Concept on how to integrate it with a Node.js application. _Keywords: Node.js, AWS, CloudWatch, CloudWatch Evidently, A/B Testing, Feature Flags_
- [Feature flags post](https://www.atlassian.com/continuous-delivery/principles/feature-flags) - How to progressively expose your features with feature flags by IAN BUCHANNAN. _Keywords: Feature Flags_

#### Shell Scripting and CLI Tools

- [Bash as a Wrapper Utility](https://github.com/nanlabs/devops-reference/tree/main/examples/scripts/bash-as-a-wrapper-utility-basic/) - Bash as a wrapper utility for other languages and tools. _Keywords: Shell Scripting, Utilities_
- [Bash as a Wrapper Utility with Easy Options](https://github.com/nanlabs/devops-reference/tree/main/examples/scripts/bash-as-a-wrapper-utility-with-easy-options/) - Bash as a wrapper utility for other languages and tools using Easy Options. _Keywords: Shell Scripting, Utilities, Easy Options_
- [Easy Options](https://github.com/nanlabs/devops-reference/tree/main/examples/scripts/easy-options/) - Easy options for shell scripts. _Keywords: Shell Scripting, Utilities, Easy Options_
- [Python CLI Basic Example](https://github.com/nanlabs/python-reference/tree/main/examples/cli-base) - Basic structure to create a command without passing the python command and the python file's path. _Keywords: Python3, PyCMD_
- [Python CLI with Typer + Rich Example](https://github.com/nanlabs/python-reference/tree/main/examples/cli-typer-base) - Interaction with an external API, to retrieve some currencies exchange rates, make conversion returning styled console output. _Keywords: Python3, Requests, Rich, Typer_
- [When to use shell](https://google.github.io/styleguide/shellguide.html#when-to-use-shell) - A guide from Google on when to use shell scripts. _Keywords: Shell Scripting, Utilities_

#### Continuous Integration, Delivery and Deployment

- [Actionlint Playground](https://rhysd.github.io/actionlint/) - Static checker for GitHub Actions workflow files. _Keywords: GitHub Actions, Actionlint_
- [Automate Pull Requests Reviews using Danger](https://github.com/nanlabs/devops-reference/tree/main/.github/workflows/pr-review.yml) - This workflow automates the initial review of Pull Requests using [Danger.js](https://danger.systems/js/). This provides another logical step in your build, through this Danger can help lint your rote tasks in daily code review. You can use Danger to codify your teams norms. Leaving humans to think about harder problems. _Keywords: GitHub Actions, Danger.js_
- [Automation Seed example](https://github.com/nanlabs/automation-seed/tree/main/.github/workflows) - Different workflows to validate the code and deploy an automation report page. _Keywords: GitHub Actions, Automation_
- [Markdown Lint](https://github.com/nanlabs/devops-reference/tree/main/.github/workflows/markdownlint.yml) - This workflow validates the Markdown files in the repository using the [markdownlint action](https://github.com/marketplace/actions/markdown-lint). _Keywords: GitHub Actions, Markdown Lint_
- [React Webpack Boilerplate](https://github.com/nanlabs/react-webpack-boilerplate/tree/main/.github/workflows) - Different workflows to validate the code and deploy a React application. _Keywords: GitHub Actions, React, Webpack_
- [Shell Check](https://github.com/nanlabs/devops-reference/tree/main/.github/workflows/shellcheck.yml) - This workflow validates the shell scripts in the repository using the [shellcheck action](https://github.com/ludeeus/action-shellcheck). _Keywords: GitHub Actions, Shell Check_
- [Terraform Check](https://github.com/nanlabs/devops-reference/tree/main/.github/workflows/tf-check.yml) - This workflow validates the Terraform files in the repository using the [terraform action](https://github.com/dflook/terraform-fmt-check). _Keywords: GitHub Actions, Terraform_
- [Todo to Issue](https://github.com/nanlabs/devops-reference/tree/main/.github/workflows/todo.yml) - This workflow scans new commits on the main branch looking for `TODO`s in the code and creates new GitHub issues. _Keywords: GitHub Actions, Todo_

#### Containers, Orchestration and Serverless

##### Containers and Compositions (Docker, Docker Compose, Buildpacks and more)

- [Airflow and Spark environment using Docker and Docker Compose](https://github.com/nanlabs/devops-reference/tree/main/examples/docker/airflow/) - Dockerfile and docker-compose.yml to run Airflow locally with initialization scripts. _Keywords: Docker, Docker Compose, Airflow, Spark_
- [AWS Glue using Docker and Docker Compose](https://github.com/nanlabs/devops-reference/tree/main/examples/docker/glue/) - Dockerfile and docker-compose.yml for AWS Glue development with AWS Glue Libs, Spark, Jupyter Notebook, AWS CLI among other tools. _Keywords: Docker, Docker Compose, AWS Glue, Spark, Jupyter Notebook, AWS CLI_
- [AWS Neptune using Docker and Docker Compose](https://github.com/nanlabs/devops-reference/tree/main/examples/docker/neptune/) - Dockerfile and docker-compose.yml to run AWS Neptune locally with initialization scripts. _Keywords: Docker, Docker Compose, AWS Neptune_
- [Localstack using Docker and Docker Compose](https://github.com/nanlabs/devops-reference/tree/main/examples/docker/localstack/) - Dockerfile and docker-compose.yml to run Localstack locally with all the necessary services. This example also includes a script to create the necessary resources in Localstack. The provided examples are for DynamoDB, S3, SQS and Kinesis. _Keywords: Docker, Docker Compose, Localstack, DynamoDB, S3, SQS, Kinesis_
- [Microsoft SQL Server using Docker and Docker Compose](https://github.com/nanlabs/devops-reference/tree/main/examples/docker/mssql/) - Dockerfile and docker-compose.yml to run Microsoft SQL Server locally with initialization scripts. _Keywords: Docker, Docker Compose, Microsoft SQL Server_
- [MongoDB + Mongo Express using Docker and Docker Compose](https://github.com/nanlabs/devops-reference/tree/main/examples/docker/mongodb/) - Dockerfile and docker-compose.yml to run MongoDB and Mongo Express locally with initialization scripts. _Keywords: Docker, Docker Compose, MongoDB, Mongo Express_
- [PostgreSQL using Docker and Docker Compose](https://github.com/nanlabs/devops-reference/tree/main/examples/docker/postgres/) - Dockerfile and docker-compose.yml to run PostgreSQL locally with initialization scripts. _Keywords: Docker, Docker Compose, PostgreSQL_
- [Python Buildpack](https://github.com/nanlabs/devops-reference/tree/main/examples/buildpacks/python#readme) - Buildpack example for Python applications. _Keywords: Buildpack, Python_

##### DevContainers and Codespaces

- [AWS Glue](https://github.com/nanlabs/devops-reference/tree/main/examples/devcontainers/glue/) - DevContainer for AWS Glue development. Uses `docker-compose` to run VSCode attached to a container with all the necessary tools to develop AWS Glue jobs such us AWS Glue Libs, Spark, Jupyter Notebook, AWS CLI among other tools. _Keywords: Docker, Docker Compose, DevContainer, VSCode DevContainer, GitHub Codespaces, AWS Glue, Spark, Jupyter Notebook, AWS CLI_
- [Node.js](https://github.com/nanlabs/devops-reference/tree/main/examples/devcontainers/nodejs/) - DevContainer for Node.js development. Uses `docker-compose` to run VSCode attached to a container with all the necessary tools to develop Node.js applications. _Keywords: Docker, Docker Compose, DevContainer, VSCode DevContainer, GitHub Codespaces, Node.js_

##### Kubernetes

- [Ingress](https://github.com/nanlabs/devops-reference/tree/main/examples/kubernetes/ingress/) - Ingress example using NGINX Ingress Controller. You can run this example locally using [Minikube](https://minikube.sigs.k8s.io/docs/start/). _Keywords: Kubernetes, Ingress, NGINX Ingress Controller_

#### Infrastructure as Code

##### AWS Amplify

- [AWS Amplify + NextJS 13](https://github.com/nanlabs/devops-reference/tree/main/examples/amplify/amplify-nextjs-deployment/) - AWS Amplify example to deploy a NextJS v13 application to the Cloud. _Keywords: AWS Amplify, NextJS, NextJS 13_

##### Serverless Framework and CloudFormation

- [AWS AppSync + Python](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless/serverless-appsync-python/) - Serverless Framework example to deploy an AWS AppSync API using Python. It also has a local development environment using [Serverless Offline](https://www.serverless.com/plugins/serverless-offline). _Keywords: Serverless Framework, AWS AppSync, Python_
- [AWS AppSync + TypeScript](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless/serverless-appsync-nodejs/) - Serverless Framework example to deploy an AWS AppSync API using TypeScript. It also has a local development environment using [Serverless Offline](https://www.serverless.com/plugins/serverless-offline). _Keywords: Serverless Framework, AWS AppSync, TypeScript_
- [AWS Glue with Python Shell and PySpark Jobs](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless/serverless-glue/) - Serverless Framework example to deploy an AWS Glue job using Python Shell and PySpark. _Keywords: Serverless Framework, AWS Glue, Python Shell, PySpark_
- [DocumentDB Cluster](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless/serverless-documentdb/) - Serverless Framework example to deploy a DocumentDB cluster with all the necessary resources. _Keywords: Serverless Framework, DocumentDB_
- [Neo4j in EC2](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless/serverless-neo4j-ec2/) - Serverless Framework example to deploy a Neo4j instance in EC2. _Keywords: Serverless Framework, Neo4j, EC2_
- [RDS Postgres Instance](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless/serverless-rds-postgres/) - Serverless Framework example to deploy a RDS Postgres cluster with all the necessary resources. _Keywords: Serverless Framework, RDS Postgres_
- [Serverless Middy](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless/serverless-middy/) - Serverless Framework example to deploy a lambda function using [Middy](https://middy.js.org/), the stylish Node.js middleware engine for AWS Lambda. _Keywords: Serverless Framework, Middy_
- [Serverless Middy with Custom Middleware](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless/serverless-middy-custom-middleware/) - Serverless Framework example to deploy a lambda function using [Middy](https://middy.js.org/), the stylish Node.js middleware engine for AWS Lambda. _Keywords: Serverless Framework, Middy, Custom Middleware_
- [Serverless S3 Local](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless/serverless-s3-local/) - Serverless Framework example to run a lambda function locally using [Serverless S3 Local](https://www.serverless.com/plugins/serverless-s3-local). _Keywords: Serverless Framework, Serverless S3 Local_

### Frontend

#### React State Management

- [AgileTs](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/atomic-agilets/) - This example shows how to use AgileTs to manage state. _Keywords: React, AgileTs_
- [Akita](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/reactive-akita/) - This example shows how to use Akita to manage state. _Keywords: React, Akita_
- [Context](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/hooks-context/) - This example shows how to use React Context to share data between components. _Keywords: React_
- [Effector](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/reactive-effector/) - This example shows how to use Effector to manage state. _Keywords: React, Effector_
- [Global State](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/hooks-global-state/) - This example shows how to use a global state using React Hooks. _Keywords: React_
- [Hookstate](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/hooks-hookstate/) - This example shows how to use Hookstate to manage state. _Keywords: React_
- [Jotai](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/atomic-jotai/) - This example shows how to use Jotai to manage state. _Keywords: React, Jotai_
- [MobX](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/bidirectional-mobx/) - This example shows how to use MobX to manage state. _Keywords: React, MobX_
- [MobX State Tree](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/bidirectional-mobx-state-tree/) - This example shows how to use MobX State Tree to manage state. _Keywords: React, MobX State Tree_
- [Prop Drilling](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/hooks-prop-drilling/) - This example shows how to pass data from a parent component to a child component using props. _Keywords: React_
- [React Easy State](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/bidirectional-easy-state/) - This example shows how to use React Easy State to manage state. _Keywords: React, React Easy State_
- [React Query](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/api-react-query/) - This example shows how to use React Query to fetch data from an API. _Keywords: React, React Query_
- [Recoil](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/atomic-recoil/) - This example shows how to use Recoil to manage state. _Keywords: React, Recoil_
- [Redux Toolkit](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/unidirectional-redux-toolkit/) - This example shows how to use Redux Toolkit to manage state. _Keywords: React, Redux Toolkit_
- [Rematch](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/unidirectional-rematch/) - This example shows how to use Rematch to manage state. _Keywords: React, Rematch_
- [Rxjs](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/reactive-rxjs/) - This example shows how to use Rxjs to manage state. _Keywords: React, Rxjs_
- [Storeon](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/reactive-storeon/) - This example shows how to use Storeon to manage state. _Keywords: React, Storeon_
- [Teaful](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/hooks-teaful/) - This example shows how to use Teaful to manage state. _Keywords: React_
- [Unistore](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/unidirectional-unistore/) - This example shows how to use Unistore to manage state. _Keywords: React, Unistore_
- [Valtio](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/bidirectional-valtio/) - This example shows how to use Valtio to manage state. _Keywords: React, Valtio_
- [XState](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/fsm-xstate/) - This example shows how to use XState to manage state. _Keywords: React, XState_
- [Zustand](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/unidirectional-zustand/) - This example shows how to use Zustand to manage state. _Keywords: React, Zustand_

### Backend

#### FastAPI

- [FastAPI Basic Example](https://github.com/nanlabs/python-reference/tree/main/examples/fastapi-base) - Rest API that retrieves mock data using Faker library. _Keywords: Python3, Faker, Factory-Boy, FastAPI, Pydantic_
- [FastAPI Complete CRUD Example](https://github.com/nanlabs/python-reference/tree/main/examples/fastapi-crud) - Rest API that allows to create, read, update and delete employees and companies in the db, besides that, has endpoints to populate the db with Mock Data using faker. _Keywords: Python3, Faker, FastAPI, Pydantic, SQLAlchemy, Alembic, Docker, Docker Compose, PGAdmin, PostgreSQL_
- [FastAPI GraphQL](https://github.com/nanlabs/python-reference/tree/main/examples/fastapi-gql) - GraphQL API that retrieves fake companies using Faker library. _Keywords: Python3, Factory-boy, Faker, FastAPI, Pydantic, Strawberry-graphql_

## Contributing

- Contributions make the open source community such an amazing place to learn, inspire, and create.
- Any contributions you make are **truly appreciated**.
- Check out our [contribution guidelines](./CONTRIBUTING.md) for more information.

[cibadge]: https://github.com/nanlabs/awesome-nan/actions/workflows/ci.yml/badge.svg
[licensebadge]: https://img.shields.io/badge/License-MIT-blue.svg
[ciurl]: https://github.com/nanlabs/awesome-nan/actions/workflows/ci.yml
[licenseurl]: https://github.com/nanlabs/awesome-nan/blob/main/LICENSE
