import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectRequired } from "../../structures/ObjectRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_ObjectRequired = (): void => _test_json_assertParse(CustomGuardError)(
    "ObjectRequired",
)<ObjectRequired>(
    ObjectRequired
)(typia.json.createAssertParse<ObjectRequired>((p) => new CustomGuardError(p)));
