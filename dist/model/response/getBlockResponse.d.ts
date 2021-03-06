/**
 * Syscoin API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.1.4
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
export interface GetBlockResponse {
    /**
     * The block hash (same as provided)
     */
    hash?: string;
    /**
     * The number of confirmations, or -1 if the block is not on the main chain
     */
    confirmations?: number;
    /**
     * The block size
     */
    size?: number;
    /**
     * The block size excluding witness data
     */
    strippedsize?: number;
    /**
     * The block weight (BIP 141)
     */
    weight?: number;
    /**
     * The block height or index
     */
    height?: number;
    /**
     * The block version
     */
    version?: number;
    /**
     * The block version formatted in hexadecimal
     */
    versionHex?: string;
    /**
     * The merkle root
     */
    merkleroot?: string;
    /**
     * The transaction ids
     */
    tx?: Array<string>;
    /**
     * The block time in seconds since epoch (Jan 1 1970 GMT)
     */
    time?: number;
    /**
     * The median block time in seconds since epoch (Jan 1 1970 GMT)
     */
    mediantime?: number;
    /**
     * ﻿The nonce
     */
    nonce?: number;
    /**
     * The bits
     */
    bits?: string;
    /**
     * ﻿The difficulty
     */
    difficulty?: number;
    /**
     * ﻿Expected number of hashes required to produce the chain up to this block (in hex)
     */
    chainwork?: string;
    /**
     * ﻿The hash of the previous block
     */
    previousblockhash?: string;
    /**
     * The hash of the next block
     */
    nextblockhash?: string;
    /**
     * (for verbose=false) A string that is serialized, hex-encoded data for block 'hash'.
     */
    data?: string;
}
