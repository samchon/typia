import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_ObjectPartialAndRequired = (): void => _test_json_assertParse(CustomGuardError)(
    "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(
    ObjectPartialAndRequired
)(typia.json.createAssertParse<ObjectPartialAndRequired>((p) => new CustomGuardError(p)));
