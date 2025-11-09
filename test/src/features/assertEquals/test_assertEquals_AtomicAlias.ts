import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { AtomicAlias } from "../../structures/AtomicAlias";

import { TypeGuardError } from "typia";

export const test_assertEquals_AtomicAlias = (): void => _test_assertEquals(TypeGuardError)(
    "AtomicAlias",
)<AtomicAlias>(
    AtomicAlias
)((input) => typia.assertEquals<AtomicAlias>(input));
