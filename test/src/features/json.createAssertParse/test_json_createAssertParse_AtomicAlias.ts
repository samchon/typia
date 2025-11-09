import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { AtomicAlias } from "../../structures/AtomicAlias";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_AtomicAlias = (): void => _test_json_assertParse(TypeGuardError)(
    "AtomicAlias",
)<AtomicAlias>(
    AtomicAlias
)(typia.json.createAssertParse<AtomicAlias>());
