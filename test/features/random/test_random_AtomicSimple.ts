import typia from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_random } from "../internal/_test_random";

export const test_random_AtomicSimple = _test_random(
    "AtomicSimple",
    () => typia.random<AtomicSimple>(),
    typia.createAssert<typia.Primitive<AtomicSimple>>(),
);