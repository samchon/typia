import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_TagLength = _test_validate(
    "TagLength",
    TagLength.generate,
    (input) => TSON.validate(input),
    TagLength.SPOILERS,
);
