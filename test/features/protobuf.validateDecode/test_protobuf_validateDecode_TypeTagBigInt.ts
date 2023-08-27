import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_protobuf_validateDecode_TypeTagBigInt =
    _test_protobuf_validateDecode("TypeTagBigInt")<TypeTagBigInt>(
        TypeTagBigInt,
    )({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<TypeTagBigInt>(input),
        encode: typia.protobuf.createEncode<TypeTagBigInt>(),
    });
