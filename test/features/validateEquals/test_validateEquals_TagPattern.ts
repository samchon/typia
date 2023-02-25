import typia from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_TagPattern = _test_validateEquals(
    "TagPattern",
    TagPattern.generate,
    (input) => typia.validateEquals(input),
);
