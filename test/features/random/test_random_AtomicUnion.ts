import typia from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_random } from "../internal/_test_random";

export const test_random_AtomicUnion = _test_random(
    "AtomicUnion",
    () => typia.random<AtomicUnion>(),
    typia.createAssert<typia.Primitive<AtomicUnion>>(),
);