import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_json_assertStringifyCustom_ObjectPrimitive =
  _test_json_assertStringify(CustomGuardError)(
    "ObjectPrimitive",
  )<ObjectPrimitive>(ObjectPrimitive)((input) =>
    typia.json.assertStringify<ObjectPrimitive>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
