import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { AtomicAlias } from "../../structures/AtomicAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_AtomicAlias = (): void => _test_json_assertParse(CustomGuardError)(
    "AtomicAlias",
)<AtomicAlias>(
    AtomicAlias
)(typia.json.createAssertParse<AtomicAlias>((p) => new CustomGuardError(p)));
