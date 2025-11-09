import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { AtomicSimple } from "../../structures/AtomicSimple";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_AtomicSimple = (): void => _test_json_assertParse(TypeGuardError)(
    "AtomicSimple",
)<AtomicSimple>(
    AtomicSimple
)(typia.json.createAssertParse<AtomicSimple>());
