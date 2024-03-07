import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_ConstantAtomicWrapper =
  _test_json_assertStringify(TypeGuardError)(
    "ConstantAtomicWrapper",
  )<ConstantAtomicWrapper>(ConstantAtomicWrapper)(
    typia.json.createAssertStringify<ConstantAtomicWrapper>(),
  );
