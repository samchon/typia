import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TagNaN } from "../../structures/TagNaN";

export const test_validateEquals_TagNaN = _test_validateEquals(
    "TagNaN",
    TagNaN.generate,
    (input) => typia.validateEquals(input),
);
