import typia from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_TagAtomicUnion = _test_validate(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    typia.createValidate<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);
