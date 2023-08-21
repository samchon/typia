import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TagFormat } from "../../structures/TagFormat";

export const test_json_validateParse_TagFormat = _test_json_validateParse(
    "TagFormat",
)<TagFormat>(TagFormat)(typia.json.createValidateParse<TagFormat>());
