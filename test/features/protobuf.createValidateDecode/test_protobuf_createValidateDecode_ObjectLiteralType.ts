import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_protobuf_createValidateDecode_ObjectLiteralType =
    _test_protobuf_validateDecode("ObjectLiteralType")<ObjectLiteralType>(
        ObjectLiteralType,
    )({
        validateDecode:
            typia.protobuf.createValidateDecode<ObjectLiteralType>(),
        encode: typia.protobuf.createEncode<ObjectLiteralType>(),
    });
