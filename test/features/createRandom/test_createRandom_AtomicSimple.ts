import typia from "../../../src";

import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_AtomicSimple = _test_random(
    "AtomicSimple",
    typia.createRandom<AtomicSimple>(),
    typia.createAssert<typia.Primitive<AtomicSimple>>(),
);
