import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_AtomicIntersection = (): void => _test_json_assertParse(CustomGuardError)(
    "AtomicIntersection",
)<AtomicIntersection>(
    AtomicIntersection
)(typia.json.createAssertParse<AtomicIntersection>((p) => new CustomGuardError(p)));
