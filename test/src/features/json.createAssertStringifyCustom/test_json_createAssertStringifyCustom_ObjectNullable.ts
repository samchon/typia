import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectNullable } from "../../structures/ObjectNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_ObjectNullable =
  _test_json_assertStringify(CustomGuardError)(
    "ObjectNullable",
  )<ObjectNullable>(ObjectNullable)(
    typia.json.createAssertStringify<ObjectNullable>(
      (p) => new CustomGuardError(p),
    ),
  );
