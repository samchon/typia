import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_json_createAssertParse_ObjectPrimitive = (): void =>
  _test_json_assertParse(TypeGuardError)("ObjectPrimitive")<ObjectPrimitive>(
    ObjectPrimitive,
  )(typia.json.createAssertParse<ObjectPrimitive>());
