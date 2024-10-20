import { createConfig, http } from 'wagmi'
import { mainnet, avalanche } from 'wagmi/chains'
import { injected, metaMask, walletConnect } from 'wagmi/connectors'

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID

if (!projectId) {
  throw new Error('You need to provide NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID env variable')
}

export const config = createConfig({
  chains: [mainnet, avalanche],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    metaMask(),
  ],
  transports: {
    [mainnet.id]: http(),
    [avalanche.id]: http(),
  },
})