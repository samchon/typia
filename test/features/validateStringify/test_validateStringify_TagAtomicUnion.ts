import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_validateStringify_TagAtomicUnion = _test_validateStringify(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => typia.validateStringify(input),
    TagAtomicUnion.SPOILERS,
);
