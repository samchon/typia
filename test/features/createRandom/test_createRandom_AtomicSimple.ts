import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_createRandom_AtomicSimple = _test_random(
    "AtomicSimple",
    typia.createRandom<AtomicSimple>(),
    typia.createAssert<AtomicSimple>(),
);
