import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_protobuf_assertEncode_TypeTagArray =
    _test_protobuf_assertEncode("TypeTagArray")<TypeTagArray>(TypeTagArray)({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<TypeTagArray>(input),
        message: typia.protobuf.message<TypeTagArray>(),
        decode: typia.protobuf.createDecode<TypeTagArray>(),
    });
