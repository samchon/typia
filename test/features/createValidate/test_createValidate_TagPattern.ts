import typia from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_TagPattern = _test_validate(
    "TagPattern",
    TagPattern.generate,
    typia.createValidate<TagPattern>(),
    TagPattern.SPOILERS,
);