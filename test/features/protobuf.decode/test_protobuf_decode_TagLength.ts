import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TagLength } from "../../structures/TagLength";

export const test_protobuf_decode_TagLength = _test_protobuf_decode(
    "TagLength",
)<TagLength>(TagLength)({
    decode: (input) => typia.protobuf.decode<TagLength>(input),
    encode: typia.protobuf.createEncode<TagLength>(),
});
