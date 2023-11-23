import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_json_createValidateParse_ConstantAtomicSimple =
  _test_json_validateParse("ConstantAtomicSimple")<ConstantAtomicSimple>(
    ConstantAtomicSimple,
  )(typia.json.createValidateParse<ConstantAtomicSimple>());
