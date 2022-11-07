import TSON from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_assert } from "./_test_assert";

export const test_assert_functional_object_union = _test_assert(
    "functional union tuple",
    FunctionalTupleUnion.generate,
    (input) => TSON.assert(input),
    FunctionalTupleUnion.SPOILERS,
);
