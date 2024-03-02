import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_json_createAssertParseCustom_ConstantAtomicSimple =
  _test_json_assertParse(CustomGuardError)(
    "ConstantAtomicSimple",
  )<ConstantAtomicSimple>(ConstantAtomicSimple)(
    typia.json.createAssertParse<ConstantAtomicSimple>(
      (p) => new CustomGuardError(p),
    ),
  );
