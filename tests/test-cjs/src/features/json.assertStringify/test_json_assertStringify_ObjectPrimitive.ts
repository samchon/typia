import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_json_assertStringify_ObjectPrimitive = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "ObjectPrimitive",
  )<ObjectPrimitive>(ObjectPrimitive)((input) =>
    typia.json.assertStringify<ObjectPrimitive>(input),
  );
