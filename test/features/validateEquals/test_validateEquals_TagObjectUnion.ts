import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_validateEquals_TagObjectUnion = _test_validateEquals(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) => typia.validateEquals(input),
);
