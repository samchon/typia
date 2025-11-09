import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_ObjectGenericUnion = (): void => _test_json_assertStringify(TypeGuardError)(
    "ObjectGenericUnion",
)<ObjectGenericUnion>(
    ObjectGenericUnion
)(typia.json.createAssertStringify<ObjectGenericUnion>());
