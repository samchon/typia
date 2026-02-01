import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { AtomicSimple } from "../../structures/AtomicSimple";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_AtomicSimple = (): void => _test_json_assertStringify(TypeGuardError)(
    "AtomicSimple",
)<AtomicSimple>(
    AtomicSimple
)(typia.json.createAssertStringify<AtomicSimple>());
