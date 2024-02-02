import { Token } from './token'

/**
 * Known WETH9 implementation addresses, used in our implementation of Ether#wrapped
 */
export const WETH9: { [chainId: number]: Token } = {
  [421614]: new Token(421614, '0x980B62Da83eFf3D4576C647993b0c1D7faf17c73', 18, 'WETH', 'Wrapped Ether'),
}
