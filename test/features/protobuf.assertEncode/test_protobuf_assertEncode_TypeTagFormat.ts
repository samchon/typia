import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_protobuf_createAssertEncode_TypeTagFormat =
    _test_protobuf_assertEncode("TypeTagFormat")<TypeTagFormat>(TypeTagFormat)({
        encode: (input) => typia.protobuf.assertEncode<TypeTagFormat>(input),
        decode: typia.protobuf.createDecode<TypeTagFormat>(),
        message: typia.protobuf.message<TypeTagFormat>(),
    });
