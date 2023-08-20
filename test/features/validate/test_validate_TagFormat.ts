import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TagFormat } from "../../structures/TagFormat";

export const test_validate_TagFormat = _test_validate(
    "TagFormat",
    TagFormat.generate,
    (input) => typia.validate<TagFormat>(input),
    TagFormat.SPOILERS,
);
