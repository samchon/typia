import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_protobuf_createValidateEncode_TypeTagTypeBigInt =
    _test_protobuf_validateEncode("TypeTagTypeBigInt")<TypeTagTypeBigInt>(
        TypeTagTypeBigInt,
    )({
        validateEncode:
            typia.protobuf.createValidateEncode<TypeTagTypeBigInt>(),
        message: typia.protobuf.message<TypeTagTypeBigInt>(),
        decode: typia.protobuf.createDecode<TypeTagTypeBigInt>(),
    });
