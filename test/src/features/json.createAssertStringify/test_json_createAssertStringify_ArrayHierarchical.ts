import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_ArrayHierarchical = (): void => _test_json_assertStringify(TypeGuardError)(
    "ArrayHierarchical",
)<ArrayHierarchical>(
    ArrayHierarchical
)(typia.json.createAssertStringify<ArrayHierarchical>());
