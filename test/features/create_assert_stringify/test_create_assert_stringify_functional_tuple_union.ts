import TSON from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_functional_tuple_union =
    _test_assert_stringify(
        "functional union tuple",
        FunctionalTupleUnion.generate,
        TSON.createAssertStringify<FunctionalTupleUnion>(),
        FunctionalTupleUnion.SPOILERS,
    );
