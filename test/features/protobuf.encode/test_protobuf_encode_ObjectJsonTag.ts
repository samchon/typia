import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_protobuf_encode_ObjectJsonTag = _test_protobuf_encode(
    "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)({
    encode: (input) => typia.protobuf.encode<ObjectJsonTag>(input),
    message: typia.protobuf.message<ObjectJsonTag>(),
});
