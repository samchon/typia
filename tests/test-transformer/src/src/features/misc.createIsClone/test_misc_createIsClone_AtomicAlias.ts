import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_misc_createIsClone_AtomicAlias = (): void => _test_misc_isClone(
    "AtomicAlias",
)<AtomicAlias>(
    AtomicAlias
)(typia.misc.createIsClone<AtomicAlias>());
