import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectDescription } from "../../structures/ObjectDescription";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_ObjectDescription = (): void => _test_json_assertParse(CustomGuardError)(
    "ObjectDescription",
)<ObjectDescription>(
    ObjectDescription
)(typia.json.createAssertParse<ObjectDescription>((p) => new CustomGuardError(p)));
