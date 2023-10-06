import typia from "../../../src";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_protobuf_createIsDecode_ObjectJsonTag = _test_protobuf_isDecode(
    "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)({
    decode: (input) => typia.protobuf.isDecode<ObjectJsonTag>(input),
    encode: typia.protobuf.createEncode<ObjectJsonTag>(),
});
