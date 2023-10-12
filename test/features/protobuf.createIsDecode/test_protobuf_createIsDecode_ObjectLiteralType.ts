import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_protobuf_createIsDecode_ObjectLiteralType =
    _test_protobuf_isDecode("ObjectLiteralType")<ObjectLiteralType>(
        ObjectLiteralType,
    )({
        decode: typia.protobuf.createIsDecode<ObjectLiteralType>(),
        encode: typia.protobuf.createEncode<ObjectLiteralType>(),
    });
