import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_assertEqualsCustom_TypeTagTuple = (): void =>
  _test_assertEquals(CustomGuardError)("TypeTagTuple")<TypeTagTuple>(
    TypeTagTuple,
  )((input) =>
    typia.assertEquals<TypeTagTuple>(input, (p) => new CustomGuardError(p)),
  );
