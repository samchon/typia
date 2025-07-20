import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_json_assertStringifyCustom_ConstantEnumeration = (): void =>
  _test_json_assertStringify(CustomGuardError)(
    "ConstantEnumeration",
  )<ConstantEnumeration>(ConstantEnumeration)((input) =>
    typia.json.assertStringify<ConstantEnumeration>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
