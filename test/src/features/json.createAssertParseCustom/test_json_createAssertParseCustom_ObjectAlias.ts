import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectAlias } from "../../structures/ObjectAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_ObjectAlias = (): void => _test_json_assertParse(CustomGuardError)(
    "ObjectAlias",
)<ObjectAlias>(
    ObjectAlias
)(typia.json.createAssertParse<ObjectAlias>((p) => new CustomGuardError(p)));
