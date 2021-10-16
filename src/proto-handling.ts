import axios, { AxiosRequestConfig } from "axios";
import { util, Writer } from "protobufjs";

export interface EncodableProtobufMessage<M> {
  encode: (message: M, writer?: Writer) => Writer;
}
export interface DecodableProtobufMessage<M> {
  decode: (reader: Uint8Array, length?: number) => M;
}

/**
 * Base request config.
 */
const baseConfig: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/x-protobuf",
    Accept: "application/x-protobuf",
  },
  responseType: "arraybuffer",
};
const getConfig = (params?: { [key: string]: string }) => {
  const config: AxiosRequestConfig = {
    ...baseConfig,
  };
  if (params) {
    config.params = params;
  }
  return config;
};
export const getWithProtoBodyAsURLParam = async <D, R>(
  endpoint: string,
  requestData: D,
  requestModel: EncodableProtobufMessage<D>,
  responseModel: DecodableProtobufMessage<R>
) => {
  const protoRequestData = requestModel.encode(requestData).finish();
  const proto_body = util.base64.encode(
    protoRequestData,
    0,
    protoRequestData.length
  );
  const config = getConfig({ proto_body });
  config.method = "GET";
  const tokenHandlingHTTPClient = axios.create();
  config.data = {};
  const response = await tokenHandlingHTTPClient.get<ArrayBuffer>(
    endpoint,
    config
  );

  return responseModel.decode(new Uint8Array(response.data));
};

export const post = async <D, R>(
  endpoint: string,
  requestData: D,
  requestModel: EncodableProtobufMessage<D>,
  responseModel: DecodableProtobufMessage<R>
) => {
  const protoRequestData = requestModel.encode(requestData).finish();
  const protoBody = protoRequestData.buffer.slice(
    protoRequestData.byteOffset,
    protoRequestData.byteOffset + protoRequestData.byteLength
  );
  const config = getConfig();
  config.method = "POST";
  const tokenHandlingHTTPClient = axios.create();
  config.data = {};
  const response = await tokenHandlingHTTPClient.post<ArrayBuffer>(
    endpoint,
    protoBody,
    config
  );
  return responseModel.decode(new Uint8Array(response.data));
};

export const patchWithProtoBodyAsURLParam = async <D>(
  endpoint: string,
  requestData: D,
  requestModel: EncodableProtobufMessage<D>
) => {
  const protoRequestData = requestModel.encode(requestData).finish();
  const proto_body = util.base64.encode(
    protoRequestData,
    0,
    protoRequestData.length
  );
  const config = getConfig({ proto_body });
  config.method = "PATCH";
  const tokenHandlingHTTPClient = axios.create();
  config.data = {};

  endpoint = `${endpoint}?proto_body=${encodeURIComponent(proto_body)}`;
  const response = await tokenHandlingHTTPClient.patch<ArrayBuffer>(
    endpoint,
    config
  );
  console.log(response);
};
