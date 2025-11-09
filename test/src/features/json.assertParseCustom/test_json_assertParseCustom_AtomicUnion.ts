import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { AtomicUnion } from "../../structures/AtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_AtomicUnion = (): void => _test_json_assertParse(CustomGuardError)(
    "AtomicUnion",
)<AtomicUnion>(
    AtomicUnion
)((input) => typia.json.assertParse<AtomicUnion>(input, (p) => new CustomGuardError(p)));
