import * as $protobuf from "protobufjs";
export namespace assignment {

    interface IGetRequest {
        UserId?: (number|null);
    }

    class GetRequest implements IGetRequest {
        constructor(p?: assignment.IGetRequest);
        public UserId: number;
        public static create(properties?: assignment.IGetRequest): assignment.GetRequest;
        public static encode(m: assignment.IGetRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): assignment.GetRequest;
    }

    interface IGetResponse {
        Firstname?: (string|null);
        Lastname?: (string|null);
        Email?: (string|null);
        ID?: (number|null);
        Designation?: (string|null);
    }

    class GetResponse implements IGetResponse {
        constructor(p?: assignment.IGetResponse);
        public Firstname: string;
        public Lastname: string;
        public Email: string;
        public ID: number;
        public Designation: string;
        public static create(properties?: assignment.IGetResponse): assignment.GetResponse;
        public static encode(m: assignment.IGetResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): assignment.GetResponse;
    }

    interface IPostRequest {
        Firstname?: (string|null);
        Lastname?: (string|null);
        Email?: (string|null);
        Designation?: (string|null);
    }

    class PostRequest implements IPostRequest {
        constructor(p?: assignment.IPostRequest);
        public Firstname: string;
        public Lastname: string;
        public Email: string;
        public Designation: string;
        public static create(properties?: assignment.IPostRequest): assignment.PostRequest;
        public static encode(m: assignment.IPostRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): assignment.PostRequest;
    }

    interface IPostResponse {
        ID?: (number|null);
    }

    class PostResponse implements IPostResponse {
        constructor(p?: assignment.IPostResponse);
        public ID: number;
        public static create(properties?: assignment.IPostResponse): assignment.PostResponse;
        public static encode(m: assignment.IPostResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): assignment.PostResponse;
    }

    interface IPatchRequest {
        UserId?: (number|null);
        Email?: (string|null);
    }

    class PatchRequest implements IPatchRequest {
        constructor(p?: assignment.IPatchRequest);
        public UserId: number;
        public Email: string;
        public static create(properties?: assignment.IPatchRequest): assignment.PatchRequest;
        public static encode(m: assignment.IPatchRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): assignment.PatchRequest;
    }
}
