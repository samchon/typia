import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_is } from "../internal/_test_is";

export const test_create_is_functional_object_union = _test_is(
    "functional union object",
    FunctionalObjectUnion.generate,
    TSON.createIs<FunctionalObjectUnion>(),
    FunctionalObjectUnion.SPOILERS,
);
