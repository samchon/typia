import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_json_assertStringifyCustom_ArrayUnion = (): void =>
  _test_json_assertStringify(CustomGuardError)("ArrayUnion")<ArrayUnion>(
    ArrayUnion,
  )((input) =>
    typia.json.assertStringify<ArrayUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
