import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TagNaN } from "../../structures/TagNaN";

export const test_equals_TagNaN = _test_equals<TagNaN>(TagNaN)((input) =>
    typia.equals<TagNaN>(input),
);
