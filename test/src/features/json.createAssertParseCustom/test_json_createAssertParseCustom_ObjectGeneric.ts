import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_ObjectGeneric = (): void => _test_json_assertParse(CustomGuardError)(
    "ObjectGeneric",
)<ObjectGeneric>(
    ObjectGeneric
)(typia.json.createAssertParse<ObjectGeneric>((p) => new CustomGuardError(p)));
