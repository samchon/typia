import typia from "../../../src";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_protobuf_createDecode_ObjectPartialAndRequired = _test_protobuf_decode(
    "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(ObjectPartialAndRequired)({
    decode: (input) => typia.protobuf.decode<ObjectPartialAndRequired>(input),
    encode: typia.protobuf.createEncode<ObjectPartialAndRequired>(),
});
