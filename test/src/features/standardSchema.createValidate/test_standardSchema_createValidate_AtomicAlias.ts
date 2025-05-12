import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_standardSchema_createValidate_AtomicAlias =
  _test_standardSchema_validate("AtomicAlias")<AtomicAlias>(AtomicAlias)(
    typia.createValidate<AtomicAlias>(),
  );
