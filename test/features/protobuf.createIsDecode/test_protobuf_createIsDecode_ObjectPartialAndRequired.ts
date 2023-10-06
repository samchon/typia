import typia from "../../../src";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_protobuf_createIsDecode_ObjectPartialAndRequired = _test_protobuf_isDecode(
    "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(ObjectPartialAndRequired)({
    decode: typia.protobuf.createIsDecode<ObjectPartialAndRequired>(),
    encode: typia.protobuf.createEncode<ObjectPartialAndRequired>(),
});
