import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_json_assertStringifyCustom_DynamicComposite = (): void =>
  _test_json_assertStringify(CustomGuardError)(
    "DynamicComposite",
  )<DynamicComposite>(DynamicComposite)((input) =>
    typia.json.assertStringify<DynamicComposite>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
