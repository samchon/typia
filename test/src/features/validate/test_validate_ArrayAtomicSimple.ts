import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_validate_ArrayAtomicSimple = (): void =>
  _test_validate("ArrayAtomicSimple")<ArrayAtomicSimple>(ArrayAtomicSimple)(
    (input) => typia.validate<ArrayAtomicSimple>(input),
  );
