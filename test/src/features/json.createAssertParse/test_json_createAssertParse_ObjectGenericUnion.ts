import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_ObjectGenericUnion = (): void => _test_json_assertParse(TypeGuardError)(
    "ObjectGenericUnion",
)<ObjectGenericUnion>(
    ObjectGenericUnion
)(typia.json.createAssertParse<ObjectGenericUnion>());
