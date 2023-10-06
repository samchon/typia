import typia from "../../../src";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_protobuf_createAssertEncode_TypeTagNaN = _test_protobuf_assertEncode(
    "TypeTagNaN",
)<TypeTagNaN>(TypeTagNaN)({
    encode: (input) => typia.protobuf.assertEncode<TypeTagNaN>(input),
    decode: typia.protobuf.createDecode<TypeTagNaN>(),
    message: typia.protobuf.message<TypeTagNaN>(),
});
