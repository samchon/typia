import typia from "../../../src";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_protobuf_createDecode_ObjectInternal = _test_protobuf_decode(
    "ObjectInternal",
)<ObjectInternal>(ObjectInternal)({
    decode: (input) => typia.protobuf.decode<ObjectInternal>(input),
    encode: typia.protobuf.createEncode<ObjectInternal>(),
});
