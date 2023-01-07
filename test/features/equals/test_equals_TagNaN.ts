import typia from "../../../src";
import { TagNaN } from "../../structures/TagNaN";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_TagNaN = _test_equals(
    "TagNaN",
    TagNaN.generate,
    (input) => typia.equals(input),
);