import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TagPattern } from "../../structures/TagPattern";

export const test_json_validateParse_TagPattern = _test_json_validateParse(
    "TagPattern",
    TagPattern.generate,
    (input) => typia.json.validateParse<TagPattern>(input),
    TagPattern.SPOILERS,
);
