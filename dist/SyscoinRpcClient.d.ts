import { JsonRpcRequest, JsonRpcCall, RpcConfigOptions } from "./index";
export declare class SyscoinRpcClient {
    private configOptions;
    private instance;
    private readonly url;
    constructor(configOptions: RpcConfigOptions);
    private getStandardResponseFromRpcResponse;
    private getRequestObject;
    static createConfigurationObject(username: any, password: any, useSsl: any, timeout: any, customHttpAgent: any): {
        auth: {
            username: any;
            password: any;
        };
        timeout: any;
    };
    callRpc(methodName: string, args?: Array<any>): JsonRpcCall;
    batchCallRpc(requests: JsonRpcRequest[]): Promise<any[]>;
}
