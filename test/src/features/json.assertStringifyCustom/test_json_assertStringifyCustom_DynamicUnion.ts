import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_json_assertStringifyCustom_DynamicUnion =
  _test_json_assertStringify(CustomGuardError)("DynamicUnion")<DynamicUnion>(
    DynamicUnion,
  )((input) =>
    typia.json.assertStringify<DynamicUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
