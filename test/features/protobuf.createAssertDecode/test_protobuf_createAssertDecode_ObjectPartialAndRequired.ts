import typia from "../../../src";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_protobuf_createAssertDecode_ObjectPartialAndRequired = _test_protobuf_assertDecode(
    "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(ObjectPartialAndRequired)({
    decode: typia.protobuf.createAssertDecode<ObjectPartialAndRequired>(),
    encode: typia.protobuf.createEncode<ObjectPartialAndRequired>(),
});
