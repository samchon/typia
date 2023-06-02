import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TagNaN } from "../../structures/TagNaN";

export const test_createEquals_TagNaN = _test_equals(
    "TagNaN",
    TagNaN.generate,
    typia.createEquals<TagNaN>(),
);
