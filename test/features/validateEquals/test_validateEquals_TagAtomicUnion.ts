import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_validateEquals_TagAtomicUnion = _test_validateEquals(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => typia.validateEquals(input),
);
