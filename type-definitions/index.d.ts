// Disclosure: do not love Typescript.
// However, for the proletariat out there we have provided
// these type definitions so that you too can have the warm
// hug of static typing inside of a dynamic language.  Boo yah.

import AddressIndexServices from './supporting-types/address-index-services';
import DiagnosticServices from "./supporting-types/diagnostic-services"
import { Address } from 'cluster';


declare module 'syscoin-js' {

    export default class SyscoinRpcClient {
        constructor({baseUrl,
                port,
                username,
                password,
                useSsl,
                timeout,
                customHttpAgent,
                loggerLevel,
                whitelist,
                blacklist}: {baseUrl?: string,
                    port?: number | string,
                    username?: string,
                    password?: string,
                    useSsl?: boolean,
                    timeout?: number,
                    customHttpAgent?: any,
                    loggerLevel?: string,
                    whitelist?: Array<string>,
                    blacklist?: Array<string>});
        
        addressIndexServices: AddressIndexServices;
        diagnosticServices: DiagnosticServices;
        
        callRpc(methodName: string, arguments?: Array<string>): Promise<any>;
    }
}