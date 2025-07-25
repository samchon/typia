import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_misc_clone_ArrayAtomicAlias = (): void =>
  _test_misc_clone("ArrayAtomicAlias")<ArrayAtomicAlias>(ArrayAtomicAlias)(
    (input) => typia.misc.clone<ArrayAtomicAlias>(input),
  );
