import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_json_assertStringifyCustom_ConstantConstEnumeration =
  _test_json_assertStringify(CustomGuardError)(
    "ConstantConstEnumeration",
  )<ConstantConstEnumeration>(ConstantConstEnumeration)((input) =>
    typia.json.assertStringify<ConstantConstEnumeration>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
