# creative-pool-builder
🏊

## PoolTogether v3 - Prize Pool Builder Frontend

This UI is useful for deploying a new set of Prize Pool contracts using the v3 PoolTogether protocol.

This app is live [here](https://builder.pooltogether.com).

You can easily deploy a prize pool suite of contracts using this app.

To run the project against a local node you can use the [pooltogether-contracts](https://github.com/pooltogether/pooltogether-contracts/tree/version-3). With those contracts you can bootstrap a local Buidler EVM instance with test data so that you can develop the app locally.

#### Tests

Locally, in three seperate terminals run:

```sh
npx hardhat node --fork https://eth-mainnet.alchemyapi.io/v2/$ALCHEMY_API_KEY
```

```sh
yarn dev
```

```sh
npx cypress open
```


#### Setup

Install dependencies:

```bash
$ yarn
```

Make sure you have `direnv` installed and copy `.envrc.example` to `.envrc`:

```bash
$ cp .envrc.example .envrc
```

Fill in your own values for `.envrc`, then run:

```bash
$ direnv allow
```

To run the local server, run:

```
$ yarn dev
```

#### Developer Tools

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
