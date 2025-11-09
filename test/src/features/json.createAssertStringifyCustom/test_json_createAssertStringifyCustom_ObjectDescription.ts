import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectDescription } from "../../structures/ObjectDescription";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_ObjectDescription = (): void => _test_json_assertStringify(CustomGuardError)(
    "ObjectDescription",
)<ObjectDescription>(
    ObjectDescription
)(typia.json.createAssertStringify<ObjectDescription>((p) => new CustomGuardError(p)));
