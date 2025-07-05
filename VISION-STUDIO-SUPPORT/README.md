# One Connect MonoRepo
One Connect Monorepo that contains mostly client packages (npm modules).

1. @oneconnect/appealsconnect-ui
2. @oneconnect/appealsconnect-gateway
3. @oneconnect/drc-ui
4. @oneconnect/drc-gateway
5. @oneconnect/ima-ui
6. @oneconnect/ima-gateway
7. @oneconnect/letterconnect-ui
8. @oneconnect/letterconnect-gateway
9. @oneconnect/common
10. @oneconnect/priorauthconnect-ui
11. @oneconnect/priorauthconnect-gateway


## Implementation

This project is using Npm workspaces and npm. With these two tools we are able to install dependencies in all `packages/*` directories.

## Developing oneconnect_ui
This is a walk-through for setting up a monorepo for development with  module powered by npm workspaces.

```bash
git clone git@fnelgitp401.fcso.net:git-cnt/oneconnect.git
cd oneconnect
npm install --legacy-peer-deps
npm run start app_name
npm run start (start all the packages)
```

## Start All Applications
```bash
$ npm  start
```
###### Start a specific  Application
```bash
$ npm  run drc
$ npm  run appealsconnect
$ npm  run letterconnect
```

## Lint and fix  All Applications
```bash
$ npm  lint:all
```
###### Lint and fix  a specific  Application
```bash
$ npm lint:drc
$ npm lint:appealsconnect
$ npm lint:letterconnect
$ npm lint:ima

#### How to add these great commit messages

Usually you might try:

```bash
$ git add -A
$ git commit -m "feat(us697): added search criteria"
```
