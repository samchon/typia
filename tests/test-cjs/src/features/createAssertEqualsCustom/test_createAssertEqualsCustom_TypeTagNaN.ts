import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_createAssertEqualsCustom_TypeTagNaN = (): void =>
  _test_assertEquals(CustomGuardError)("TypeTagNaN")<TypeTagNaN>(TypeTagNaN)(
    typia.createAssertEquals<TypeTagNaN>((p) => new CustomGuardError(p)),
  );
