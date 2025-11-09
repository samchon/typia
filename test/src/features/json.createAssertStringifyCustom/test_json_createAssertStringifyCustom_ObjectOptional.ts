import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectOptional } from "../../structures/ObjectOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_ObjectOptional = (): void => _test_json_assertStringify(CustomGuardError)(
    "ObjectOptional",
)<ObjectOptional>(
    ObjectOptional
)(typia.json.createAssertStringify<ObjectOptional>((p) => new CustomGuardError(p)));
