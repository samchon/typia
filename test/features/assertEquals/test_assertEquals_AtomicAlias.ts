import typia from "typia";

import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_AtomicAlias = _test_assertEquals(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => typia.assertEquals(input),
);
