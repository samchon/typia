import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_assertEqualsCustom_ObjectPartial = (): void =>
  _test_assertEquals(CustomGuardError)("ObjectPartial")<ObjectPartial>(
    ObjectPartial,
  )((input) =>
    typia.assertEquals<ObjectPartial>(input, (p) => new CustomGuardError(p)),
  );
