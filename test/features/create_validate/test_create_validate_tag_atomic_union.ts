import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_tag_atomic_union = _test_validate(
    "atomic union tag",
    TagAtomicUnion.generate,
    TSON.createValidate<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);
