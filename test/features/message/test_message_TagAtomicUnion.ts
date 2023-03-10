import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_message_TagAtomicUnion = _test_message(
    "TagAtomicUnion",
    typia.message<TagAtomicUnion>(),
);
