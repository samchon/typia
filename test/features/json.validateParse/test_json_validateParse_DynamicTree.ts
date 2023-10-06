import typia from "../../../src";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_json_validateParse_DynamicTree = _test_json_validateParse(
    "DynamicTree",
)<DynamicTree>(
    DynamicTree
)((input) => typia.json.validateParse<DynamicTree>(input));
