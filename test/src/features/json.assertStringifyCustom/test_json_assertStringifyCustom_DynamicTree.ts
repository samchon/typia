import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicTree } from "../../structures/DynamicTree";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_DynamicTree =
  _test_json_assertStringify(CustomGuardError)("DynamicTree")<DynamicTree>(
    DynamicTree,
  )((input) =>
    typia.json.assertStringify<DynamicTree>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
