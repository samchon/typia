import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { AtomicAlias } from "../../structures/AtomicAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_AtomicAlias = (): void => _test_json_assertParse(CustomGuardError)(
    "AtomicAlias",
)<AtomicAlias>(
    AtomicAlias
)((input) => typia.json.assertParse<AtomicAlias>(input, (p) => new CustomGuardError(p)));
