import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_createAssertEquals_TypeTagType = (): void =>
  _test_assertEquals(TypeGuardError)("TypeTagType")<TypeTagType>(TypeTagType)(
    typia.createAssertEquals<TypeTagType>(),
  );
