import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_json_assertParseCustom_ConstantConstEnumeration =
  _test_json_assertParse(CustomGuardError)(
    "ConstantConstEnumeration",
  )<ConstantConstEnumeration>(ConstantConstEnumeration)((input) =>
    typia.json.assertParse<ConstantConstEnumeration>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
