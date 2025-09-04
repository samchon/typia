import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_is_TypeTagArrayUnion = (): void =>
  _test_is("TypeTagArrayUnion")<TypeTagArrayUnion>(TypeTagArrayUnion)((input) =>
    typia.is<TypeTagArrayUnion>(input),
  );
