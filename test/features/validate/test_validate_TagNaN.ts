import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TagNaN } from "../../structures/TagNaN";

export const test_validate_TagNaN = _test_validate(
    "TagNaN",
    TagNaN.generate,
    (input) => typia.validate<TagNaN>(input),
    TagNaN.SPOILERS,
);
