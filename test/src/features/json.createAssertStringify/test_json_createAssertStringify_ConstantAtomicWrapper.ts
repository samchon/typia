import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_json_createAssertStringify_ConstantAtomicWrapper = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "ConstantAtomicWrapper",
  )<ConstantAtomicWrapper>(ConstantAtomicWrapper)(
    typia.json.createAssertStringify<ConstantAtomicWrapper>(),
  );
