import typia from "../../../src";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_json_validateParse_ObjectRecursive = _test_json_validateParse(
    "ObjectRecursive",
)<ObjectRecursive>(
    ObjectRecursive
)((input) => typia.json.validateParse<ObjectRecursive>(input));
