import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_functional_validateParameters_TypeTagArrayUnion = (): void =>
  _test_functional_validateParameters("TypeTagArrayUnion")(TypeTagArrayUnion)(
    (p: (input: TypeTagArrayUnion) => TypeTagArrayUnion) =>
      typia.functional.validateParameters(p),
  );
