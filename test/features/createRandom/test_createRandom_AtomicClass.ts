import typia from "../../../src";
import { AtomicClass } from "../../structures/AtomicClass";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_AtomicClass = _test_random(
    "AtomicClass",
    typia.createRandom<AtomicClass>(),
    typia.createAssert<typia.Primitive<AtomicClass>>(),
);