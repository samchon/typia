import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_assertEqualsCustom_TypeTagTypeUnion = (): void =>
  _test_assertEquals(CustomGuardError)("TypeTagTypeUnion")<TypeTagTypeUnion>(
    TypeTagTypeUnion,
  )((input) =>
    typia.assertEquals<TypeTagTypeUnion>(input, (p) => new CustomGuardError(p)),
  );
