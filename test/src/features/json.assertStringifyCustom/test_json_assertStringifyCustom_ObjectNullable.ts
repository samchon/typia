import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_json_assertStringifyCustom_ObjectNullable = (): void =>
  _test_json_assertStringify(CustomGuardError)(
    "ObjectNullable",
  )<ObjectNullable>(ObjectNullable)((input) =>
    typia.json.assertStringify<ObjectNullable>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
