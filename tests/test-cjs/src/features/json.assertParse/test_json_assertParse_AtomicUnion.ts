import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_json_assertParse_AtomicUnion = (): void =>
  _test_json_assertParse(TypeGuardError)("AtomicUnion")<AtomicUnion>(
    AtomicUnion,
  )((input) => typia.json.assertParse<AtomicUnion>(input));
