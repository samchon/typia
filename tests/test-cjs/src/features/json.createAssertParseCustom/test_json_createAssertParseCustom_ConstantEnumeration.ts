import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_json_createAssertParseCustom_ConstantEnumeration = (): void =>
  _test_json_assertParse(CustomGuardError)(
    "ConstantEnumeration",
  )<ConstantEnumeration>(ConstantEnumeration)(
    typia.json.createAssertParse<ConstantEnumeration>(
      (p) => new CustomGuardError(p),
    ),
  );
