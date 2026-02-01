import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectInternal } from "../../structures/ObjectInternal";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_ObjectInternal = (): void => _test_json_assertStringify(TypeGuardError)(
    "ObjectInternal",
)<ObjectInternal>(
    ObjectInternal
)(typia.json.createAssertStringify<ObjectInternal>());
