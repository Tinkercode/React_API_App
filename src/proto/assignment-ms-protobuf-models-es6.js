/* eslint-disable */
/*eslint-disable*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const assignment = $root.assignment = (() => {

    /**
     * Namespace assignment.
     * @exports assignment
     * @namespace
     */
    const assignment = {};

    assignment.GetRequest = (function() {

        /**
         * Properties of a GetRequest.
         * @memberof assignment
         * @interface IGetRequest
         * @property {number|null} [UserId] GetRequest UserId
         */

        /**
         * Constructs a new GetRequest.
         * @memberof assignment
         * @classdesc Represents a GetRequest.
         * @implements IGetRequest
         * @constructor
         * @param {assignment.IGetRequest=} [p] Properties to set
         */
        function GetRequest(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GetRequest UserId.
         * @member {number} UserId
         * @memberof assignment.GetRequest
         * @instance
         */
        GetRequest.prototype.UserId = 0;

        /**
         * Creates a new GetRequest instance using the specified properties.
         * @function create
         * @memberof assignment.GetRequest
         * @static
         * @param {assignment.IGetRequest=} [properties] Properties to set
         * @returns {assignment.GetRequest} GetRequest instance
         */
        GetRequest.create = function create(properties) {
            return new GetRequest(properties);
        };

        /**
         * Encodes the specified GetRequest message. Does not implicitly {@link assignment.GetRequest.verify|verify} messages.
         * @function encode
         * @memberof assignment.GetRequest
         * @static
         * @param {assignment.IGetRequest} m GetRequest message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRequest.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.UserId != null && Object.hasOwnProperty.call(m, "UserId"))
                w.uint32(8).int32(m.UserId);
            return w;
        };

        /**
         * Decodes a GetRequest message from the specified reader or buffer.
         * @function decode
         * @memberof assignment.GetRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {assignment.GetRequest} GetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRequest.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.assignment.GetRequest();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.UserId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GetRequest;
    })();

    assignment.GetResponse = (function() {

        /**
         * Properties of a GetResponse.
         * @memberof assignment
         * @interface IGetResponse
         * @property {string|null} [Firstname] GetResponse Firstname
         * @property {string|null} [Lastname] GetResponse Lastname
         * @property {string|null} [Email] GetResponse Email
         * @property {number|null} [ID] GetResponse ID
         * @property {string|null} [Designation] GetResponse Designation
         */

        /**
         * Constructs a new GetResponse.
         * @memberof assignment
         * @classdesc Represents a GetResponse.
         * @implements IGetResponse
         * @constructor
         * @param {assignment.IGetResponse=} [p] Properties to set
         */
        function GetResponse(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GetResponse Firstname.
         * @member {string} Firstname
         * @memberof assignment.GetResponse
         * @instance
         */
        GetResponse.prototype.Firstname = "";

        /**
         * GetResponse Lastname.
         * @member {string} Lastname
         * @memberof assignment.GetResponse
         * @instance
         */
        GetResponse.prototype.Lastname = "";

        /**
         * GetResponse Email.
         * @member {string} Email
         * @memberof assignment.GetResponse
         * @instance
         */
        GetResponse.prototype.Email = "";

        /**
         * GetResponse ID.
         * @member {number} ID
         * @memberof assignment.GetResponse
         * @instance
         */
        GetResponse.prototype.ID = 0;

        /**
         * GetResponse Designation.
         * @member {string} Designation
         * @memberof assignment.GetResponse
         * @instance
         */
        GetResponse.prototype.Designation = "";

        /**
         * Creates a new GetResponse instance using the specified properties.
         * @function create
         * @memberof assignment.GetResponse
         * @static
         * @param {assignment.IGetResponse=} [properties] Properties to set
         * @returns {assignment.GetResponse} GetResponse instance
         */
        GetResponse.create = function create(properties) {
            return new GetResponse(properties);
        };

        /**
         * Encodes the specified GetResponse message. Does not implicitly {@link assignment.GetResponse.verify|verify} messages.
         * @function encode
         * @memberof assignment.GetResponse
         * @static
         * @param {assignment.IGetResponse} m GetResponse message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetResponse.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Firstname != null && Object.hasOwnProperty.call(m, "Firstname"))
                w.uint32(10).string(m.Firstname);
            if (m.Lastname != null && Object.hasOwnProperty.call(m, "Lastname"))
                w.uint32(18).string(m.Lastname);
            if (m.Email != null && Object.hasOwnProperty.call(m, "Email"))
                w.uint32(26).string(m.Email);
            if (m.ID != null && Object.hasOwnProperty.call(m, "ID"))
                w.uint32(32).int32(m.ID);
            if (m.Designation != null && Object.hasOwnProperty.call(m, "Designation"))
                w.uint32(42).string(m.Designation);
            return w;
        };

        /**
         * Decodes a GetResponse message from the specified reader or buffer.
         * @function decode
         * @memberof assignment.GetResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {assignment.GetResponse} GetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetResponse.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.assignment.GetResponse();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Firstname = r.string();
                    break;
                case 2:
                    m.Lastname = r.string();
                    break;
                case 3:
                    m.Email = r.string();
                    break;
                case 4:
                    m.ID = r.int32();
                    break;
                case 5:
                    m.Designation = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GetResponse;
    })();

    assignment.PostRequest = (function() {

        /**
         * Properties of a PostRequest.
         * @memberof assignment
         * @interface IPostRequest
         * @property {string|null} [Firstname] PostRequest Firstname
         * @property {string|null} [Lastname] PostRequest Lastname
         * @property {string|null} [Email] PostRequest Email
         * @property {string|null} [Designation] PostRequest Designation
         */

        /**
         * Constructs a new PostRequest.
         * @memberof assignment
         * @classdesc Represents a PostRequest.
         * @implements IPostRequest
         * @constructor
         * @param {assignment.IPostRequest=} [p] Properties to set
         */
        function PostRequest(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * PostRequest Firstname.
         * @member {string} Firstname
         * @memberof assignment.PostRequest
         * @instance
         */
        PostRequest.prototype.Firstname = "";

        /**
         * PostRequest Lastname.
         * @member {string} Lastname
         * @memberof assignment.PostRequest
         * @instance
         */
        PostRequest.prototype.Lastname = "";

        /**
         * PostRequest Email.
         * @member {string} Email
         * @memberof assignment.PostRequest
         * @instance
         */
        PostRequest.prototype.Email = "";

        /**
         * PostRequest Designation.
         * @member {string} Designation
         * @memberof assignment.PostRequest
         * @instance
         */
        PostRequest.prototype.Designation = "";

        /**
         * Creates a new PostRequest instance using the specified properties.
         * @function create
         * @memberof assignment.PostRequest
         * @static
         * @param {assignment.IPostRequest=} [properties] Properties to set
         * @returns {assignment.PostRequest} PostRequest instance
         */
        PostRequest.create = function create(properties) {
            return new PostRequest(properties);
        };

        /**
         * Encodes the specified PostRequest message. Does not implicitly {@link assignment.PostRequest.verify|verify} messages.
         * @function encode
         * @memberof assignment.PostRequest
         * @static
         * @param {assignment.IPostRequest} m PostRequest message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PostRequest.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Firstname != null && Object.hasOwnProperty.call(m, "Firstname"))
                w.uint32(10).string(m.Firstname);
            if (m.Lastname != null && Object.hasOwnProperty.call(m, "Lastname"))
                w.uint32(18).string(m.Lastname);
            if (m.Email != null && Object.hasOwnProperty.call(m, "Email"))
                w.uint32(26).string(m.Email);
            if (m.Designation != null && Object.hasOwnProperty.call(m, "Designation"))
                w.uint32(34).string(m.Designation);
            return w;
        };

        /**
         * Decodes a PostRequest message from the specified reader or buffer.
         * @function decode
         * @memberof assignment.PostRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {assignment.PostRequest} PostRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PostRequest.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.assignment.PostRequest();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Firstname = r.string();
                    break;
                case 2:
                    m.Lastname = r.string();
                    break;
                case 3:
                    m.Email = r.string();
                    break;
                case 4:
                    m.Designation = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PostRequest;
    })();

    assignment.PostResponse = (function() {

        /**
         * Properties of a PostResponse.
         * @memberof assignment
         * @interface IPostResponse
         * @property {number|null} [ID] PostResponse ID
         */

        /**
         * Constructs a new PostResponse.
         * @memberof assignment
         * @classdesc Represents a PostResponse.
         * @implements IPostResponse
         * @constructor
         * @param {assignment.IPostResponse=} [p] Properties to set
         */
        function PostResponse(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * PostResponse ID.
         * @member {number} ID
         * @memberof assignment.PostResponse
         * @instance
         */
        PostResponse.prototype.ID = 0;

        /**
         * Creates a new PostResponse instance using the specified properties.
         * @function create
         * @memberof assignment.PostResponse
         * @static
         * @param {assignment.IPostResponse=} [properties] Properties to set
         * @returns {assignment.PostResponse} PostResponse instance
         */
        PostResponse.create = function create(properties) {
            return new PostResponse(properties);
        };

        /**
         * Encodes the specified PostResponse message. Does not implicitly {@link assignment.PostResponse.verify|verify} messages.
         * @function encode
         * @memberof assignment.PostResponse
         * @static
         * @param {assignment.IPostResponse} m PostResponse message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PostResponse.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ID != null && Object.hasOwnProperty.call(m, "ID"))
                w.uint32(8).int32(m.ID);
            return w;
        };

        /**
         * Decodes a PostResponse message from the specified reader or buffer.
         * @function decode
         * @memberof assignment.PostResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {assignment.PostResponse} PostResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PostResponse.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.assignment.PostResponse();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ID = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PostResponse;
    })();

    assignment.PatchRequest = (function() {

        /**
         * Properties of a PatchRequest.
         * @memberof assignment
         * @interface IPatchRequest
         * @property {number|null} [UserId] PatchRequest UserId
         * @property {string|null} [Email] PatchRequest Email
         */

        /**
         * Constructs a new PatchRequest.
         * @memberof assignment
         * @classdesc Represents a PatchRequest.
         * @implements IPatchRequest
         * @constructor
         * @param {assignment.IPatchRequest=} [p] Properties to set
         */
        function PatchRequest(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * PatchRequest UserId.
         * @member {number} UserId
         * @memberof assignment.PatchRequest
         * @instance
         */
        PatchRequest.prototype.UserId = 0;

        /**
         * PatchRequest Email.
         * @member {string} Email
         * @memberof assignment.PatchRequest
         * @instance
         */
        PatchRequest.prototype.Email = "";

        /**
         * Creates a new PatchRequest instance using the specified properties.
         * @function create
         * @memberof assignment.PatchRequest
         * @static
         * @param {assignment.IPatchRequest=} [properties] Properties to set
         * @returns {assignment.PatchRequest} PatchRequest instance
         */
        PatchRequest.create = function create(properties) {
            return new PatchRequest(properties);
        };

        /**
         * Encodes the specified PatchRequest message. Does not implicitly {@link assignment.PatchRequest.verify|verify} messages.
         * @function encode
         * @memberof assignment.PatchRequest
         * @static
         * @param {assignment.IPatchRequest} m PatchRequest message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PatchRequest.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.UserId != null && Object.hasOwnProperty.call(m, "UserId"))
                w.uint32(8).int32(m.UserId);
            if (m.Email != null && Object.hasOwnProperty.call(m, "Email"))
                w.uint32(18).string(m.Email);
            return w;
        };

        /**
         * Decodes a PatchRequest message from the specified reader or buffer.
         * @function decode
         * @memberof assignment.PatchRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {assignment.PatchRequest} PatchRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PatchRequest.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.assignment.PatchRequest();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.UserId = r.int32();
                    break;
                case 2:
                    m.Email = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PatchRequest;
    })();

    return assignment;
})();

export { $root as default };
