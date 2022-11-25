import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_tag_atomic_union = _test_stringify(
    "atomic union tag",
    TagAtomicUnion.generate,
    (input) => TSON.stringify(input),
);
