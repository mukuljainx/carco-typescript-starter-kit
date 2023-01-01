## carco-typescript-starter-kit

This is a CRA with Craco.

## Getting Started

Replace `@yourServiceName` with your service/app name. For absolute imports.

We use `nvm`, you can install using the [official docs](https://github.com/nvm-sh/nvm).

### Setup

`nvm use && npm i`

#### Commitlint setup

```
npx husky install
```

### Running the dev server

`npm start`

## Folder structure

### Building blocks

These components will not have any business logic inside and are very simple can be used in any app not only ours but obviously will follow our branding and guideline.

- Directory: `src/blocks`
- package: `@yourServiceName/blocks`

### Components

These components will not have any business logic inside but can be complicated and will be very specific to our app like FlowEngine

- Directory: `src/components`
- package: `@yourServiceName/components`

### hooks

These hooks will not have any business logic inside and will be common

- Directory: `src/hooks`
- package: `@yourServiceName/hooks`

### Pages

These components will have all business logic inside and will represent a page/screen in the app.

- Directory: `src/pages`
- package: `@yourServiceName/pages`

### Services

All the third party libraries will go here like `date-fns` or `styled-components` **they will not be directly imported**, all the config and wrapping around them will be done here. Any util will go here as well.

- Directory: `src/services`
- package: `@yourServiceName/*` (@yourServiceName/styled, @yourServiceName/date)

## Guidelines

We will follow domain driven development, whatever is used together will stay together! All the pages specific services, components, hooks will go there, only common components will reside in `src/components`

```
- pages
    - projects
     - listing
      -- index.tsx [main UI]
      -- anySubComponent.tsx
      -- messages.ts
      -- service.ts [apis]
```
