import typia from "typia";

import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_is } from "../internal/_test_is";

export const test_is_AtomicAlias = _test_is(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => typia.is(input),
    AtomicAlias.SPOILERS,
);
