import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_ConstantConstEnumeration =
  _test_json_assertParse(CustomGuardError)(
    "ConstantConstEnumeration",
  )<ConstantConstEnumeration>(ConstantConstEnumeration)(
    typia.json.createAssertParse<ConstantConstEnumeration>(
      (p) => new CustomGuardError(p),
    ),
  );
