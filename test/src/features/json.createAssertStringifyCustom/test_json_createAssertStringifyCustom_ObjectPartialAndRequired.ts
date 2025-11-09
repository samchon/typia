import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_ObjectPartialAndRequired = (): void => _test_json_assertStringify(CustomGuardError)(
    "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(
    ObjectPartialAndRequired
)(typia.json.createAssertStringify<ObjectPartialAndRequired>((p) => new CustomGuardError(p)));
