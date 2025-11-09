import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_json_assertParse_AtomicAlias = (): void =>
  _test_json_assertParse(TypeGuardError)("AtomicAlias")<AtomicAlias>(
    AtomicAlias,
  )((input) => typia.json.assertParse<AtomicAlias>(input));
