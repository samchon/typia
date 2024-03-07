import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_ObjectPrimitive =
  _test_json_assertStringify(CustomGuardError)(
    "ObjectPrimitive",
  )<ObjectPrimitive>(ObjectPrimitive)(
    typia.json.createAssertStringify<ObjectPrimitive>(
      (p) => new CustomGuardError(p),
    ),
  );
