import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_standardSchema_createValidate_AtomicIntersection =
  _test_standardSchema_validate("AtomicIntersection")<AtomicIntersection>(
    AtomicIntersection,
  )(typia.createValidate<AtomicIntersection>());
