import TSON from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_functional_array_union = _test_assert_type(
    "functional union array",
    FunctionalArrayUnion.generate,
    TSON.createAssertType<FunctionalArrayUnion>(),
    FunctionalArrayUnion.SPOILERS,
);
