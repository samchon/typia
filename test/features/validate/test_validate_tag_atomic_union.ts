import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_validate } from "./_test_validate";

export const test_validate_tag_atomic_union = _test_validate(
    "atomic union tag",
    TagAtomicUnion.generate,
    (input) => TSON.validate(input),
    TagAtomicUnion.SPOILERS,
);
