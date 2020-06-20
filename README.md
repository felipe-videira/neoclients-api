# Neoclients API
An client management service. Also check the [Neoclients Web](https://github.com/felipe-videira/neoclients-web)

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Stats](#stats)

## Requirements
Docker ^19.03

## Installation
Install [Docker](https://docs.docker.com/get-docker/)

Create a file named ".env" on the root folder with the information exemplified on the ".env.example" file

Apply the ".env" changes
```bash
$ docker-compose config
```
Start
```bash
$ docker-compose up 
```

## Usage

#### To use the db admin, access the below URL on your browser:
http://localhost:7474/browser/

#### If settings, such as packages, are changed
```bash
$ docker-compose up --build
```
#### If the ".env" file is changed
```bash
$ docker-compose config
```

## Stats
 - Node.js v12
 - Express v4
 - Neo4j Community Edition 3.5.17

