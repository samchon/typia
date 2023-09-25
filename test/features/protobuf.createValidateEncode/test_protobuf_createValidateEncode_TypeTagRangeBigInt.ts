import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_protobuf_createValidateEncode_TypeTagRangeBigInt =
    _test_protobuf_validateEncode("TypeTagRangeBigInt")<TypeTagRangeBigInt>(
        TypeTagRangeBigInt,
    )({
        validateEncode:
            typia.protobuf.createValidateEncode<TypeTagRangeBigInt>(),
        message: typia.protobuf.message<TypeTagRangeBigInt>(),
        decode: typia.protobuf.createDecode<TypeTagRangeBigInt>(),
    });
