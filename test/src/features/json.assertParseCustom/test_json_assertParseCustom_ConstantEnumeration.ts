import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_json_assertParseCustom_ConstantEnumeration =
  _test_json_assertParse(CustomGuardError)(
    "ConstantEnumeration",
  )<ConstantEnumeration>(ConstantEnumeration)((input) =>
    typia.json.assertParse<ConstantEnumeration>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
