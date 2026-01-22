import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_assertEqualsCustom_ObjectInternal = (): void =>
  _test_assertEquals(CustomGuardError)("ObjectInternal")<ObjectInternal>(
    ObjectInternal,
  )((input) =>
    typia.assertEquals<ObjectInternal>(input, (p) => new CustomGuardError(p)),
  );
