import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_stringify_TagObjectUnion = _test_stringify(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) => typia.stringify(input),
);
