import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_protobuf_assertDecode_TypeTagBigInt =
    _test_protobuf_assertDecode("TypeTagBigInt")<TypeTagBigInt>(TypeTagBigInt)({
        assertDecode: typia.protobuf.createAssertDecode<TypeTagBigInt>(),
        encode: typia.protobuf.createEncode<TypeTagBigInt>(),
    });
