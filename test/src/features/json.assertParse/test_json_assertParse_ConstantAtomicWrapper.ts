import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_json_assertParse_ConstantAtomicWrapper = (): void =>
  _test_json_assertParse(TypeGuardError)(
    "ConstantAtomicWrapper",
  )<ConstantAtomicWrapper>(ConstantAtomicWrapper)((input) =>
    typia.json.assertParse<ConstantAtomicWrapper>(input),
  );
