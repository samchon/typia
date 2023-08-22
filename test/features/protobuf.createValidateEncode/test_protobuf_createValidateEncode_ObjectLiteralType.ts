import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_protobuf_validateEncode_ObjectLiteralType =
    _test_protobuf_validateEncode("ObjectLiteralType")<ObjectLiteralType>(
        ObjectLiteralType,
    )({
        validateEncode:
            typia.protobuf.createValidateEncode<ObjectLiteralType>(),
        message: typia.protobuf.message<ObjectLiteralType>(),
        decode: typia.protobuf.createDecode<ObjectLiteralType>(),
    });
