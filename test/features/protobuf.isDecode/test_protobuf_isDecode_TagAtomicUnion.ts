import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_protobuf_isDecode_TagAtomicUnion = _test_protobuf_isDecode(
    "TagAtomicUnion",
)<TagAtomicUnion>(TagAtomicUnion)({
    isDecode: (input) => typia.protobuf.isDecode<TagAtomicUnion>(input),
    encode: typia.protobuf.createEncode<TagAtomicUnion>(),
});
