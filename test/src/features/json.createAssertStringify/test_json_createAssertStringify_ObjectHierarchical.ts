import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_ObjectHierarchical = (): void => _test_json_assertStringify(TypeGuardError)(
    "ObjectHierarchical",
)<ObjectHierarchical>(
    ObjectHierarchical
)(typia.json.createAssertStringify<ObjectHierarchical>());
