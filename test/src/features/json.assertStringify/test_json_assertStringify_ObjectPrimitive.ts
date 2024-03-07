import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_ObjectPrimitive =
  _test_json_assertStringify(TypeGuardError)(
    "ObjectPrimitive",
  )<ObjectPrimitive>(ObjectPrimitive)((input) =>
    typia.json.assertStringify<ObjectPrimitive>(input),
  );
