import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_json_assertStringify_AtomicSimple =
  _test_json_assertStringify(TypeGuardError)("AtomicSimple")<AtomicSimple>(
    AtomicSimple,
  )((input) => typia.json.assertStringify<AtomicSimple>(input));
