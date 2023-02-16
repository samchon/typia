import typia from "typia";

import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_AtomicAlias = _test_random(
    "AtomicAlias",
    typia.createRandom<AtomicAlias>(),
    typia.createAssert<typia.Primitive<AtomicAlias>>(),
);
