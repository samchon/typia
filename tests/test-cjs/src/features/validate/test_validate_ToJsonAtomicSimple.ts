import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_validate_ToJsonAtomicSimple = (): void =>
  _test_validate("ToJsonAtomicSimple")<ToJsonAtomicSimple>(ToJsonAtomicSimple)(
    (input) => typia.validate<ToJsonAtomicSimple>(input),
  );
