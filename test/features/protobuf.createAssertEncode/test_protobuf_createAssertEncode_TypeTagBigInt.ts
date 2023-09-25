import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_protobuf_createAssertEncode_TypeTagBigInt =
    _test_protobuf_assertEncode("TypeTagBigInt")<TypeTagBigInt>(TypeTagBigInt)({
        assertEncode: typia.protobuf.createAssertEncode<TypeTagBigInt>(),
        message: typia.protobuf.message<TypeTagBigInt>(),
        decode: typia.protobuf.createDecode<TypeTagBigInt>(),
    });
