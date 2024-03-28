import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_json_createAssertStringifyCustom_ConstantAtomicWrapper =
  _test_json_assertStringify(CustomGuardError)(
    "ConstantAtomicWrapper",
  )<ConstantAtomicWrapper>(ConstantAtomicWrapper)(
    typia.json.createAssertStringify<ConstantAtomicWrapper>(
      (p) => new CustomGuardError(p),
    ),
  );
