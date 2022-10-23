import TSON from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_functional_object_union = _test_assert(
    "functional union tuple",
    FunctionalTupleUnion.generate,
    TSON.createAssertType<FunctionalTupleUnion>(),
    FunctionalTupleUnion.SPOILERS,
);
