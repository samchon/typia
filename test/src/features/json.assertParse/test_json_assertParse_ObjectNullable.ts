import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectNullable } from "../../structures/ObjectNullable";

import { TypeGuardError } from "typia";

export const test_json_assertParse_ObjectNullable = (): void => _test_json_assertParse(TypeGuardError)(
    "ObjectNullable",
)<ObjectNullable>(
    ObjectNullable
)((input) => typia.json.assertParse<ObjectNullable>(input));
