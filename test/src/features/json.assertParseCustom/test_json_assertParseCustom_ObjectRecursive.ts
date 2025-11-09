import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_ObjectRecursive = (): void => _test_json_assertParse(CustomGuardError)(
    "ObjectRecursive",
)<ObjectRecursive>(
    ObjectRecursive
)((input) => typia.json.assertParse<ObjectRecursive>(input, (p) => new CustomGuardError(p)));
