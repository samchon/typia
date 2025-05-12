import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_standardSchema_createValidate_AtomicSimple =
  _test_standardSchema_validate("AtomicSimple")<AtomicSimple>(AtomicSimple)(
    typia.createValidate<AtomicSimple>(),
  );
