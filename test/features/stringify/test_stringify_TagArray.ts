import typia from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_TagArray = _test_stringify(
    "TagArray",
    TagArray.generate,
    (input) => typia.stringify(input),
);