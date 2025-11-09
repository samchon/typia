import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { AtomicSimple } from "../../structures/AtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_AtomicSimple = (): void => _test_json_assertParse(CustomGuardError)(
    "AtomicSimple",
)<AtomicSimple>(
    AtomicSimple
)(typia.json.createAssertParse<AtomicSimple>((p) => new CustomGuardError(p)));
