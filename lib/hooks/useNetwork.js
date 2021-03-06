import { useContext, useMemo } from 'react'
import { useRouter } from 'next/router'

import { POOL_ALIASES } from 'lib/constants'
import { nameToChainId, NETWORK, NETWORK_DATA } from 'lib/utils/networks'
import { WalletContext } from 'lib/components/WalletContextProvider'

// TODO: Don't return until wallet is ready so we know if there will be a change
// then we won't fetch mainnet, throw it away and fetch what the wallet is connected to
export const useNetwork = () => {
  const walletContext = useContext(WalletContext)
  const walletNetwork = walletContext._onboard.getState().network

  return useMemo(() => getNetwork(walletNetwork), [walletNetwork])
}

const getNetwork = (walletNetworkChainId) => {
  let chainId = walletNetworkChainId

  const networkData = NETWORK_DATA[chainId]
  const walletNetworkData = walletNetworkChainId ? NETWORK_DATA[walletNetworkChainId] : {}

  return {
    ...networkData,
    walletConnected: Boolean(walletNetworkChainId),
    walletMatchesNetwork: walletNetworkChainId ? chainId === walletNetworkChainId : null,
    walletNetwork: {
      ...walletNetworkData
    }
  }
}
