import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_protobuf_assertEncode_TypeTagRange =
    _test_protobuf_assertEncode("TypeTagRange")<TypeTagRange>(TypeTagRange)({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<TypeTagRange>(input),
        message: typia.protobuf.message<TypeTagRange>(),
        decode: typia.protobuf.createDecode<TypeTagRange>(),
    });
