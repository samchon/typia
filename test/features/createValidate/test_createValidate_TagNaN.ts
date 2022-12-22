import typia from "../../../src";
import { TagNaN } from "../../structures/TagNaN";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_TagNaN = _test_validate(
    "TagNaN",
    TagNaN.generate,
    typia.createValidate<TagNaN>(),
    TagNaN.SPOILERS,
);