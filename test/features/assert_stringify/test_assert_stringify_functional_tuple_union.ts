import TSON from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_functional_tuple_union =
    _test_assert_stringify(
        "functional union tuple",
        FunctionalTupleUnion.generate,
        (input) => TSON.assertStringify(input),
        FunctionalTupleUnion.SPOILERS,
    );
