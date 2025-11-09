import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_assertEquals_FunctionalArrayUnion = (): void =>
  _test_assertEquals(TypeGuardError)(
    "FunctionalArrayUnion",
  )<FunctionalArrayUnion>(FunctionalArrayUnion)((input) =>
    typia.assertEquals<FunctionalArrayUnion>(input),
  );
