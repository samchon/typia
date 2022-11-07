import TSON from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_assert_type } from "./_test_assert_type";

export const test_assert_type_functional_object_union = _test_assert_type(
    "functional union tuple",
    FunctionalTupleUnion.generate,
    (input) => TSON.assertType(input),
    FunctionalTupleUnion.SPOILERS,
);
