import typia from "../../../src";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_misc_clone_AtomicAlias = _test_misc_clone(
    "AtomicAlias",
)<AtomicAlias>(
    AtomicAlias
)((input) => typia.misc.clone<AtomicAlias>(input));
