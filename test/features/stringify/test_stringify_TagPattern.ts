import typia from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_TagPattern = _test_stringify(
    "TagPattern",
    TagPattern.generate,
    (input) => typia.stringify(input),
);
