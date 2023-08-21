import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TagLength } from "../../structures/TagLength";

export const test_protobuf_encode_TagLength = _test_protobuf_encode(
    "TagLength",
)<TagLength>(TagLength)({
    encode: (input) => typia.protobuf.encode<TagLength>(input),
    message: typia.protobuf.message<TagLength>(),
});
