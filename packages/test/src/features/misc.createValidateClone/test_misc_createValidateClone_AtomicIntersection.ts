import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_misc_createValidateClone_AtomicIntersection =
  _test_misc_validateClone("AtomicIntersection")<AtomicIntersection>(
    AtomicIntersection,
  )(typia.misc.createValidateClone<AtomicIntersection>());
