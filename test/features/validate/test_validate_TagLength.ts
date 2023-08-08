import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TagLength } from "../../structures/TagLength";

export const test_validate_TagLength = _test_validate(
    "TagLength",
    TagLength.generate,
    (input) => typia.validate(input),
    TagLength.SPOILERS,
);
