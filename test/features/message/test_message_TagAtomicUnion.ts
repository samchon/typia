import typia from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_message } from "../internal/_test_message";

export const test_message_TagAtomicUnion = _test_message(
    "TagAtomicUnion",
    typia.message<TagAtomicUnion>(),
);