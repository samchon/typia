import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_stringify_TagAtomicUnion = _test_stringify(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => typia.stringify<TagAtomicUnion>(input),
);
