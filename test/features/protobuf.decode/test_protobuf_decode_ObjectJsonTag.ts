import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_protobuf_createDecode_ObjectJsonTag = _test_protobuf_decode(
    "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)({
    decode: (input) => typia.protobuf.decode<ObjectJsonTag>(input),
    encode: typia.protobuf.createEncode<ObjectJsonTag>(),
});
