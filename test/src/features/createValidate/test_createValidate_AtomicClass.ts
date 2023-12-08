import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_createValidate_AtomicClass = _test_validate(
  "AtomicClass",
)<AtomicClass>(AtomicClass)(typia.createValidate<AtomicClass>());
