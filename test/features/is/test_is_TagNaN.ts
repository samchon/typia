import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TagNaN } from "../../structures/TagNaN";

export const test_is_TagNaN = _test_is<TagNaN>(TagNaN)((input) =>
    typia.is(input),
);
