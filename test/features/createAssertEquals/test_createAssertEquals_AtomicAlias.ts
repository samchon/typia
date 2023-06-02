import typia from "../../../src";

import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_assertEquals } from "../../internal/_test_assertEquals";

export const test_createAssertEquals_AtomicAlias = _test_assertEquals(
    "AtomicAlias",
    AtomicAlias.generate,
    typia.createAssertEquals<AtomicAlias>(),
);
