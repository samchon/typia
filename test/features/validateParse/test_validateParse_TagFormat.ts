import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_TagFormat = _test_validateParse(
    "TagFormat",
    TagFormat.generate,
    (input) => TSON.validateParse<TagFormat>(input),
    TagFormat.SPOILERS,
);
