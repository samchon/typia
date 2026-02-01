import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_createValidateEquals_AtomicAlias = (): void => _test_validateEquals(
    "AtomicAlias",
)<AtomicAlias>(
    AtomicAlias
)(typia.createValidateEquals<AtomicAlias>());
