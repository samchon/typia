import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_ObjectIntersection = (): void => _test_json_assertStringify(TypeGuardError)(
    "ObjectIntersection",
)<ObjectIntersection>(
    ObjectIntersection
)(typia.json.createAssertStringify<ObjectIntersection>());
