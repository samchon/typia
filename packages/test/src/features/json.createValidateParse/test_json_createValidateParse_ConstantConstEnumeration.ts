import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_json_createValidateParse_ConstantConstEnumeration =
  _test_json_validateParse(
    "ConstantConstEnumeration",
  )<ConstantConstEnumeration>(ConstantConstEnumeration)(
    typia.json.createValidateParse<ConstantConstEnumeration>(),
  );
