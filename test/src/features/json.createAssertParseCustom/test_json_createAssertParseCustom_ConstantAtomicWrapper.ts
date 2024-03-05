import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_json_createAssertParseCustom_ConstantAtomicWrapper =
  _test_json_assertParse(CustomGuardError)(
    "ConstantAtomicWrapper",
  )<ConstantAtomicWrapper>(ConstantAtomicWrapper)(
    typia.json.createAssertParse<ConstantAtomicWrapper>(
      (p) => new CustomGuardError(p),
    ),
  );
