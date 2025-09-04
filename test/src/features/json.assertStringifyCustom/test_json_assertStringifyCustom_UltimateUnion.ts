import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_json_assertStringifyCustom_UltimateUnion = (): void =>
  _test_json_assertStringify(CustomGuardError)("UltimateUnion")<UltimateUnion>(
    UltimateUnion,
  )((input) =>
    typia.json.assertStringify<UltimateUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
