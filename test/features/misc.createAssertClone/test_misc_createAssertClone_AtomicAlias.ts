import typia from "../../../src";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_misc_createAssertClone_AtomicAlias = _test_misc_assertClone(
    "AtomicAlias",
)<AtomicAlias>(
    AtomicAlias
)(typia.misc.createAssertClone<AtomicAlias>());
