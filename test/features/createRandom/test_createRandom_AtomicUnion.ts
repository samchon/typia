import typia from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_AtomicUnion = _test_random(
    "AtomicUnion",
    typia.createRandom<AtomicUnion>(),
    typia.createAssert<typia.Primitive<AtomicUnion>>(),
);