import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_protobuf_createAssertEncode_TypeTagTypeBigInt =
    _test_protobuf_assertEncode("TypeTagTypeBigInt")<TypeTagTypeBigInt>(
        TypeTagTypeBigInt,
    )({
        encode: (input) =>
            typia.protobuf.assertEncode<TypeTagTypeBigInt>(input),
        decode: typia.protobuf.createDecode<TypeTagTypeBigInt>(),
        message: typia.protobuf.message<TypeTagTypeBigInt>(),
    });
