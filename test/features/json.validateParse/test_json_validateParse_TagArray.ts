import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TagArray } from "../../structures/TagArray";

export const test_json_validateParse_TagArray = _test_json_validateParse(
    "TagArray",
)<TagArray>(TagArray)((input) => typia.json.validateParse<TagArray>(input));
