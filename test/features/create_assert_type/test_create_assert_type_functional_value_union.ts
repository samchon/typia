import TSON from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_functional_value_union = _test_assert_type(
    "functional union value",
    FunctionalValueUnion.generate,
    TSON.createAssertType<FunctionalValueUnion>(),
    FunctionalValueUnion.SPOILERS,
);
