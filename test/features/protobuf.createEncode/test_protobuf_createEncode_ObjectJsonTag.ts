import typia from "../../../src";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_protobuf_createEncode_ObjectJsonTag = _test_protobuf_encode(
    "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)({
    encode: typia.protobuf.createEncode<ObjectJsonTag>(),
    decode: typia.protobuf.createDecode<ObjectJsonTag>(),
    message: typia.protobuf.message<ObjectJsonTag>(),
});
