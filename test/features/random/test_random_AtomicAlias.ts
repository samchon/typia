import typia from "typia";

import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_random } from "../internal/_test_random";

export const test_random_AtomicAlias = _test_random(
    "AtomicAlias",
    () => typia.random<AtomicAlias>(),
    typia.createAssert<typia.Primitive<AtomicAlias>>(),
);
