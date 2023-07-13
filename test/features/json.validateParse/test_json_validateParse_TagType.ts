import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TagType } from "../../structures/TagType";

export const test_json_validateParse_TagType = _test_json_validateParse(
    "TagType",
    TagType.generate,
    (input) => typia.json.validateParse<TagType>(input),
    TagType.SPOILERS,
);
