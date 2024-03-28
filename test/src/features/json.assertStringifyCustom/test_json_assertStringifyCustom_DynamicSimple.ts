import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_json_assertStringifyCustom_DynamicSimple =
  _test_json_assertStringify(CustomGuardError)("DynamicSimple")<DynamicSimple>(
    DynamicSimple,
  )((input) =>
    typia.json.assertStringify<DynamicSimple>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
