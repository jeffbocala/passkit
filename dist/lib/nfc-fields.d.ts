import { NFCDictionary } from '../interfaces';
/**
 * node-forge doesn't support ECDH used by Apple in NFC,
 * so we will store keys as PEM encoded strings
 *
 * @see {@link https://github.com/digitalbazaar/forge/issues/116}
 * @see {@link https://stackoverflow.com/questions/48438753/apple-wallet-nfc-encryptionpublickey}
 * @see {@link https://github.com/digitalbazaar/forge/issues/237}
 */
export declare class NFCField extends Array<{
    message: string;
    publicKey?: string;
}> {
    constructor(nfcs?: NFCDictionary[]);
    toJSON(): NFCDictionary[] | undefined;
    add(message: string, publicKey?: string): this;
    clear(): this;
}
