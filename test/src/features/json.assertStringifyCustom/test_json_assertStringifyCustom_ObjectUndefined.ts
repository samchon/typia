import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_ObjectUndefined = (): void => _test_json_assertStringify(CustomGuardError)(
    "ObjectUndefined",
)<ObjectUndefined>(
    ObjectUndefined
)((input) => typia.json.assertStringify<ObjectUndefined>(input, (p) => new CustomGuardError(p)));
