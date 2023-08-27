import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_protobuf_assertEncode_TypeTagRangeBigInt =
    _test_protobuf_assertEncode("TypeTagRangeBigInt")<TypeTagRangeBigInt>(
        TypeTagRangeBigInt,
    )({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<TypeTagRangeBigInt>(input),
        message: typia.protobuf.message<TypeTagRangeBigInt>(),
        decode: typia.protobuf.createDecode<TypeTagRangeBigInt>(),
    });
