import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_protobuf_encode_TagAtomicUnion = _test_protobuf_encode(
    "TagAtomicUnion",
)<TagAtomicUnion>(TagAtomicUnion)({
    encode: (input) => typia.protobuf.encode<TagAtomicUnion>(input),
    message: typia.protobuf.message<TagAtomicUnion>(),
});
