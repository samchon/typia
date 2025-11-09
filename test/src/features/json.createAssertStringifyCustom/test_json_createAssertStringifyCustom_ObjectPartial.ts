import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectPartial } from "../../structures/ObjectPartial";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_ObjectPartial = (): void => _test_json_assertStringify(CustomGuardError)(
    "ObjectPartial",
)<ObjectPartial>(
    ObjectPartial
)(typia.json.createAssertStringify<ObjectPartial>((p) => new CustomGuardError(p)));
