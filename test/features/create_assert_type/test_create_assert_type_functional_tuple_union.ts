import TSON from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_functional_object_union =
    _test_assert_type(
        "functional union tuple",
        FunctionalTupleUnion.generate,
        TSON.createAssertType<FunctionalTupleUnion>(),
        FunctionalTupleUnion.SPOILERS,
    );
