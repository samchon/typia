import TSON from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_functional_value_union = _test_assert(
    "functional union value",
    FunctionalValueUnion.generate,
    TSON.createAssert<FunctionalValueUnion>(),
    FunctionalValueUnion.SPOILERS,
);
