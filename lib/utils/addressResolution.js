// import { Address } from '@graphprotocol/graph-ts'
import axios from 'axios'


const main = async () => {
  try {  const result = await axios.post('https://api.thegraph.com/subgraphs/name/unstoppable-domains-integrations/dot-crypto-registry', {
    {
      domains(where: {owner: "0x8aad44321a86b170879d7a244c1e8d360c99dda8"}) {
        uri
      }
    }
  }
  console.log(result.data.data.domains);
} catch(e) {
  console.error(error)
}
}






}

// const axios = require('axios')

// axios
//   .post('https://api.thegraph.com/subgraphs/name/aave/protocol', {
//     query: `
//   {
//     flashLoans(first: 10, orderBy: timestamp, orderDirection: desc) {
//       id
//       reserve {
//         name
//         symbol
//       }
//       amount,
//       target,
//       timestamp
//     }
//   }
//   `
//   })
//   .then((res) => {
//     for (const flashsloan of res.data.data.flashLoans) {
//       console.log(flashsloan)
//     }
//   })
//   .catch((error) => {
//     console.error(error)
//   })

// import Resolution from '@unstoppabledomains/resolution/build/Resolution'
// import { ethers } from 'ethers'
// import { address, walletName, networkName } from 'lib/components/WalletInfo.jsx'

// const INFURA_ID = process.env.NEXT_JS_INFURA_ID
// const RPC_URL =
//   networkName && INFURA_ID
//     ? `https://${networkName}.infura.io/v3/${INFURA_ID}`
//     : 'http://localhost:8545'

// const provider = new ethers.providers.Web3Provider(RPC_URL, 'any')
// export function addressResolution(address) {
//   try {
//     Resolution.infura(address)
//   } catch (e) {
//     return false
//   }
//   try {
//     Resolution.fromEthersProvider(provider)
//   } catch (e) {
//     return false
//   }
//   return true
// }
// // Source: https://github.com/unstoppabledomains/resolution
// export const addressResolution = () => {
//  return (

// function newResolution() {
//   return new Resolution()
// }

// export function resolve(domain, currency) {
//   return resolution
//     .addr(domain, currency)
//     .then((address) => console.log(domain, 'resolves to', address))
//     .catch(console.error)
// }

// export function resolveMultiChain(domain, currency, chain) {
//   return resolution
//     .multiChainAddr(domain, currency, chain)
//     .then((address) => console.log(domain, 'resolves to', address, version))
//     .catch(console.error)
// }
// resolve('brad.crypto', 'ETH')
// resolve('brad.zil', 'ZIL')
// resolveMultiChain('brad.crypto', 'USDT', 'ERC20')
// resolveMultiChain('brad.crypto', 'USDT', 'OMNI')
// )
