import TSON from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_is } from "./../is/_test_is";

export const test_create_is_functional_property_union = _test_is(
    "functional union property",
    FunctionalPropertyUnion.generate,
    TSON.createIs<FunctionalPropertyUnion>(),
    FunctionalPropertyUnion.SPOILERS,
);
