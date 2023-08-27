import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_protobuf_validateDecode_TypeTagTypeBigInt =
    _test_protobuf_validateDecode("TypeTagTypeBigInt")<TypeTagTypeBigInt>(
        TypeTagTypeBigInt,
    )({
        validateDecode:
            typia.protobuf.createValidateDecode<TypeTagTypeBigInt>(),
        encode: typia.protobuf.createEncode<TypeTagTypeBigInt>(),
    });
