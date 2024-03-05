import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_json_createAssertParse_ConstantAtomicWrapper =
  _test_json_assertParse(TypeGuardError)(
    "ConstantAtomicWrapper",
  )<ConstantAtomicWrapper>(ConstantAtomicWrapper)(
    typia.json.createAssertParse<ConstantAtomicWrapper>(),
  );
