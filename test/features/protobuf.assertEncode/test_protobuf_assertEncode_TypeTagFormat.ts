import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_protobuf_assertEncode_TypeTagFormat =
    _test_protobuf_assertEncode("TypeTagFormat")<TypeTagFormat>(TypeTagFormat)({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<TypeTagFormat>(input),
        message: typia.protobuf.message<TypeTagFormat>(),
        decode: typia.protobuf.createDecode<TypeTagFormat>(),
    });
