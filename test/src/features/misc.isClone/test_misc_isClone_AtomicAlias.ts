import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_misc_isClone_AtomicAlias = (): void => _test_misc_isClone(
    "AtomicAlias",
)<AtomicAlias>(
    AtomicAlias
)((input) => typia.misc.isClone<AtomicAlias>(input));
