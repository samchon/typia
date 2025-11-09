import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { AtomicSimple } from "../../structures/AtomicSimple";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_AtomicSimple = (): void => _test_json_assertStringify(TypeGuardError)(
    "AtomicSimple",
)<AtomicSimple>(
    AtomicSimple
)((input) => typia.json.assertStringify<AtomicSimple>(input));
