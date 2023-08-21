import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_json_validateParse_TagMatrix = _test_json_validateParse(
    "TagMatrix",
)<TagMatrix>(TagMatrix)((input) => typia.json.validateParse<TagMatrix>(input));
