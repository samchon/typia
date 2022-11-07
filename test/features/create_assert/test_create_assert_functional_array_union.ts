import TSON from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_functional_array_union = _test_assert(
    "functional union array",
    FunctionalArrayUnion.generate,
    TSON.createAssert<FunctionalArrayUnion>(),
    FunctionalArrayUnion.SPOILERS,
);
