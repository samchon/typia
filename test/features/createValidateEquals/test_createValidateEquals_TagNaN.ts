import typia from "../../../src";
import { TagNaN } from "../../structures/TagNaN";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_TagNaN = _test_validateEquals(
    "TagNaN",
    TagNaN.generate,
    typia.createValidateEquals<TagNaN>(),
);