import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_protobuf_validateEncode_TypeTagTypeBigInt =
    _test_protobuf_validateEncode("TypeTagTypeBigInt")<TypeTagTypeBigInt>(
        TypeTagTypeBigInt,
    )({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<TypeTagTypeBigInt>(input),
        message: typia.protobuf.message<TypeTagTypeBigInt>(),
        decode: typia.protobuf.createDecode<TypeTagTypeBigInt>(),
    });
