import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_protobuf_createAssertEncode_TypeTagRangeBigInt =
    _test_protobuf_assertEncode("TypeTagRangeBigInt")<TypeTagRangeBigInt>(
        TypeTagRangeBigInt,
    )({
        encode: (input) =>
            typia.protobuf.assertEncode<TypeTagRangeBigInt>(input),
        decode: typia.protobuf.createDecode<TypeTagRangeBigInt>(),
        message: typia.protobuf.message<TypeTagRangeBigInt>(),
    });
