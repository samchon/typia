import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { AtomicClass } from "../../structures/AtomicClass";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_AtomicClass = (): void => _test_json_assertParse(CustomGuardError)(
    "AtomicClass",
)<AtomicClass>(
    AtomicClass
)(typia.json.createAssertParse<AtomicClass>((p) => new CustomGuardError(p)));
