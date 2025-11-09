import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { AtomicAlias } from "../../structures/AtomicAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_AtomicAlias = (): void => _test_json_assertStringify(CustomGuardError)(
    "AtomicAlias",
)<AtomicAlias>(
    AtomicAlias
)((input) => typia.json.assertStringify<AtomicAlias>(input, (p) => new CustomGuardError(p)));
