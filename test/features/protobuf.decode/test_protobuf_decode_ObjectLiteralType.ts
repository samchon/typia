import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_protobuf_createDecode_ObjectLiteralType =
    _test_protobuf_decode("ObjectLiteralType")<ObjectLiteralType>(
        ObjectLiteralType,
    )({
        decode: (input) => typia.protobuf.decode<ObjectLiteralType>(input),
        encode: typia.protobuf.createEncode<ObjectLiteralType>(),
    });
