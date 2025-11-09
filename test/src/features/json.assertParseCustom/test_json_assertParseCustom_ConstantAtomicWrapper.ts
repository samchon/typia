import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_json_assertParseCustom_ConstantAtomicWrapper = (): void =>
  _test_json_assertParse(CustomGuardError)(
    "ConstantAtomicWrapper",
  )<ConstantAtomicWrapper>(ConstantAtomicWrapper)((input) =>
    typia.json.assertParse<ConstantAtomicWrapper>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
