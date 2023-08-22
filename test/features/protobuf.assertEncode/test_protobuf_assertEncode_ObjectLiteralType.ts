import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_protobuf_assertEncode_ObjectLiteralType =
    _test_protobuf_assertEncode("ObjectLiteralType")<ObjectLiteralType>(
        ObjectLiteralType,
    )({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<ObjectLiteralType>(input),
        message: typia.protobuf.message<ObjectLiteralType>(),
        decode: typia.protobuf.createDecode<ObjectLiteralType>(),
    });
