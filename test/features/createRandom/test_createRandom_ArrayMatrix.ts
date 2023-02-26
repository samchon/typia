import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_createRandom_ArrayMatrix = _test_random(
    "ArrayMatrix",
    typia.createRandom<ArrayMatrix>(),
    typia.createAssert<ArrayMatrix>(),
);
