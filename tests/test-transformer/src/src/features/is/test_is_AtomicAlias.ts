import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_is_AtomicAlias = (): void => _test_is(
    "AtomicAlias",
)<AtomicAlias>(
    AtomicAlias
)((input) => typia.is<AtomicAlias>(input));
