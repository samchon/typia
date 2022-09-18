import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_validate_equals } from "./_test_validate_equals";

export const test_validate_equals_tag_atomic_union = _test_validate_equals(
    "atomic union tag",
    TagAtomicUnion.generate,
    (input) => TSON.validateEquals(input),
);
