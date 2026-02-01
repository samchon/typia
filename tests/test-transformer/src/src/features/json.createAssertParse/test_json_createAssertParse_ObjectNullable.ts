import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectNullable } from "../../structures/ObjectNullable";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_ObjectNullable = (): void => _test_json_assertParse(TypeGuardError)(
    "ObjectNullable",
)<ObjectNullable>(
    ObjectNullable
)(typia.json.createAssertParse<ObjectNullable>());
