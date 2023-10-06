import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_protobuf_createAssertDecode_ObjectLiteralType =
    _test_protobuf_assertDecode("ObjectLiteralType")<ObjectLiteralType>(
        ObjectLiteralType,
    )({
        decode: typia.protobuf.createAssertDecode<ObjectLiteralType>(),
        encode: typia.protobuf.createEncode<ObjectLiteralType>(),
    });
