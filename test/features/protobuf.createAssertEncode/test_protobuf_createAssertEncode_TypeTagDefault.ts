import typia from "../../../src";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_protobuf_createAssertEncode_TypeTagDefault = _test_protobuf_assertEncode(
    "TypeTagDefault",
)<TypeTagDefault>(TypeTagDefault)({
    encode: typia.protobuf.createAssertEncode<TypeTagDefault>(),
    decode: typia.protobuf.createDecode<TypeTagDefault>(),
    message: typia.protobuf.message<TypeTagDefault>(),
});
