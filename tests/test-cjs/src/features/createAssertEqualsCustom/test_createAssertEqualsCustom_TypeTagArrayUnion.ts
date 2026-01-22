import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_createAssertEqualsCustom_TypeTagArrayUnion = (): void =>
  _test_assertEquals(CustomGuardError)("TypeTagArrayUnion")<TypeTagArrayUnion>(
    TypeTagArrayUnion,
  )(
    typia.createAssertEquals<TypeTagArrayUnion>((p) => new CustomGuardError(p)),
  );
