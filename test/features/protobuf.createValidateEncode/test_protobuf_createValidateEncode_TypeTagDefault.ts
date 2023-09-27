import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_protobuf_createValidateEncode_TypeTagDefault =
    _test_protobuf_validateEncode("TypeTagDefault")<TypeTagDefault>(
        TypeTagDefault,
    )({
        validateEncode: typia.protobuf.createValidateEncode<TypeTagDefault>(),
        message: typia.protobuf.message<TypeTagDefault>(),
        decode: typia.protobuf.createDecode<TypeTagDefault>(),
    });
