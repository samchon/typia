import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_createIs_TypeTagArrayUnion = (): void =>
  _test_is("TypeTagArrayUnion")<TypeTagArrayUnion>(TypeTagArrayUnion)(
    typia.createIs<TypeTagArrayUnion>(),
  );
