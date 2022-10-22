import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_validate } from "./_test_validate";

export const test_validate_tag_range = _test_validate(
    "range tag",
    TagRange.generate,
    (input) => TSON.validate(input),
    TagRange.SPOILERS,
);
