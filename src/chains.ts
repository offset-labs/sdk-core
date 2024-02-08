export enum ChainId {
  ARBITRUM_SEPOLIA = 421614,
}

export const SUPPORTED_CHAINS = [
  ChainId.ARBITRUM_SEPOLIA,
] as const
export type SupportedChainsType = typeof SUPPORTED_CHAINS[number]

export enum NativeCurrencyName {
  // Strings match input for CLI
  ETHER = 'ETH',
}
