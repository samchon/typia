import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_protobuf_decode_TagAtomicUnion = _test_protobuf_decode(
    "TagAtomicUnion",
)<TagAtomicUnion>(TagAtomicUnion)({
    decode: (input) => typia.protobuf.decode<TagAtomicUnion>(input),
    encode: typia.protobuf.createEncode<TagAtomicUnion>(),
});
