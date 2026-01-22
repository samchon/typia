import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_json_createAssertParse_AtomicUnion = (): void =>
  _test_json_assertParse(TypeGuardError)("AtomicUnion")<AtomicUnion>(
    AtomicUnion,
  )(typia.json.createAssertParse<AtomicUnion>());
