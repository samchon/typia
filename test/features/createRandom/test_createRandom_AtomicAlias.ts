import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_random_AtomicAlias = _test_random(
    "AtomicAlias",
    typia.createRandom<AtomicAlias>(),
    typia.createAssert<typia.Primitive<AtomicAlias>>(),
);
