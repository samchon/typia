import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_protobuf_assertEncode_TypeTagTypeBigInt =
    _test_protobuf_assertEncode("TypeTagTypeBigInt")<TypeTagTypeBigInt>(
        TypeTagTypeBigInt,
    )({
        assertEncode: typia.protobuf.createAssertEncode<TypeTagTypeBigInt>(),
        message: typia.protobuf.message<TypeTagTypeBigInt>(),
        decode: typia.protobuf.createDecode<TypeTagTypeBigInt>(),
    });
