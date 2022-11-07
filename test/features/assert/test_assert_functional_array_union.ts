import TSON from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_assert } from "./_test_assert";

export const test_assert_functional_array_union = _test_assert(
    "functional union array",
    FunctionalArrayUnion.generate,
    (input) => TSON.assert(input),
    FunctionalArrayUnion.SPOILERS,
);
