import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { UltimateUnion } from "../../structures/UltimateUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_UltimateUnion =
  _test_json_assertStringify(CustomGuardError)("UltimateUnion")<UltimateUnion>(
    UltimateUnion,
  )((input) =>
    typia.json.assertStringify<UltimateUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
