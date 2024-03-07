import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_TypeTagArrayUnion =
  _test_assertEquals(CustomGuardError)("TypeTagArrayUnion")<TypeTagArrayUnion>(
    TypeTagArrayUnion,
  )(
    typia.createAssertEquals<TypeTagArrayUnion>((p) => new CustomGuardError(p)),
  );
