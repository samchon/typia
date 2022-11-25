import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_TagFormat = _test_validate(
    "TagFormat",
    TagFormat.generate,
    (input) => TSON.validate(input),
    TagFormat.SPOILERS,
);