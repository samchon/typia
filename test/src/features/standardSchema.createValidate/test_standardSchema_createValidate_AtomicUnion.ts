import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_standardSchema_createValidate_AtomicUnion = (): void =>
  _test_standardSchema_validate("AtomicUnion")<AtomicUnion>(AtomicUnion)(
    typia.createValidate<AtomicUnion>(),
  );
