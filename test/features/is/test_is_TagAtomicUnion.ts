import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_is } from "../internal/_test_is";

export const test_is_TagAtomicUnion = _test_is(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => TSON.is(input),
    TagAtomicUnion.SPOILERS,
);