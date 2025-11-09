import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectDate } from "../../structures/ObjectDate";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_ObjectDate = (): void => _test_json_assertStringify(CustomGuardError)(
    "ObjectDate",
)<ObjectDate>(
    ObjectDate
)(typia.json.createAssertStringify<ObjectDate>((p) => new CustomGuardError(p)));
