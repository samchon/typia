import typia from "../../../src";

import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_AtomicAlias = _test_assertParse(
    "AtomicAlias",
    AtomicAlias.generate,
    typia.createAssertParse<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);
