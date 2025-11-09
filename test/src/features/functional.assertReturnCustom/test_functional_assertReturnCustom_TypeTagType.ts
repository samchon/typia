import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_assertReturnCustom_TypeTagType = (): void =>
  _test_functional_assertReturn(CustomGuardError)("TypeTagType")(TypeTagType)(
    (p: (input: TypeTagType) => TypeTagType) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
