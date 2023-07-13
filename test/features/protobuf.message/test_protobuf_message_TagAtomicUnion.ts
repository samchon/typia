import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_protobuf_message_TagAtomicUnion = _test_protobuf_message(
    "TagAtomicUnion",
    typia.protobuf.message<TagAtomicUnion>(),
);
