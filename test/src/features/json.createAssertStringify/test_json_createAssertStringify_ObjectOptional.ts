import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectOptional } from "../../structures/ObjectOptional";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_ObjectOptional = (): void => _test_json_assertStringify(TypeGuardError)(
    "ObjectOptional",
)<ObjectOptional>(
    ObjectOptional
)(typia.json.createAssertStringify<ObjectOptional>());
