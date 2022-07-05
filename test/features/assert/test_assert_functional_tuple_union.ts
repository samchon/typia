import TSON from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_assert_for_of } from "./_test_assert_for_of";

export const test_assert_functional_object_union = _test_assert_for_of(
    "functional union tuple",
    FunctionalTupleUnion.generate,
    (input) => TSON.assertType(input),
    // UNABLE TO SPIL
);
