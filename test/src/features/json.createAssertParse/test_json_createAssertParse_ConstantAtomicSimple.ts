import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_json_createAssertParse_ConstantAtomicSimple =
  _test_json_assertParse(TypeGuardError)(
    "ConstantAtomicSimple",
  )<ConstantAtomicSimple>(ConstantAtomicSimple)(
    typia.json.createAssertParse<ConstantAtomicSimple>(),
  );
