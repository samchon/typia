import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_protobuf_createValidateDecode_TypeTagTypeBigInt =
    _test_protobuf_validateDecode("TypeTagTypeBigInt")<TypeTagTypeBigInt>(
        TypeTagTypeBigInt,
    )({
        decode: (input) =>
            typia.protobuf.validateDecode<TypeTagTypeBigInt>(input),
        encode: typia.protobuf.createEncode<TypeTagTypeBigInt>(),
    });
