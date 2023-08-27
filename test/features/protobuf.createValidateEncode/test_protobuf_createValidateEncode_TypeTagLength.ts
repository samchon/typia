import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_protobuf_validateEncode_TypeTagLength =
    _test_protobuf_validateEncode("TypeTagLength")<TypeTagLength>(
        TypeTagLength,
    )({
        validateEncode: typia.protobuf.createValidateEncode<TypeTagLength>(),
        message: typia.protobuf.message<TypeTagLength>(),
        decode: typia.protobuf.createDecode<TypeTagLength>(),
    });
