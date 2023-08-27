import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_protobuf_validateEncode_TypeTagBigInt =
    _test_protobuf_validateEncode("TypeTagBigInt")<TypeTagBigInt>(
        TypeTagBigInt,
    )({
        validateEncode: typia.protobuf.createValidateEncode<TypeTagBigInt>(),
        message: typia.protobuf.message<TypeTagBigInt>(),
        decode: typia.protobuf.createDecode<TypeTagBigInt>(),
    });
