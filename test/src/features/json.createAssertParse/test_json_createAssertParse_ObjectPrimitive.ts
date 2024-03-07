import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_ObjectPrimitive =
  _test_json_assertParse(TypeGuardError)("ObjectPrimitive")<ObjectPrimitive>(
    ObjectPrimitive,
  )(typia.json.createAssertParse<ObjectPrimitive>());
