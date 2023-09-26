import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_protobuf_createValidateEncode_TypeTagType =
    _test_protobuf_validateEncode("TypeTagType")<TypeTagType>(TypeTagType)({
        validateEncode: typia.protobuf.createValidateEncode<TypeTagType>(),
        message: typia.protobuf.message<TypeTagType>(),
        decode: typia.protobuf.createDecode<TypeTagType>(),
    });
