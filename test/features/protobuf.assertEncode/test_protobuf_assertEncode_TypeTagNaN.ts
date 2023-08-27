import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_protobuf_assertEncode_TypeTagNaN =
    _test_protobuf_assertEncode("TypeTagNaN")<TypeTagNaN>(TypeTagNaN)({
        assertEncode: (input) => typia.protobuf.assertEncode<TypeTagNaN>(input),
        message: typia.protobuf.message<TypeTagNaN>(),
        decode: typia.protobuf.createDecode<TypeTagNaN>(),
    });
