import TSON from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_is } from "./../is/_test_is";

export const test_create_is_functional_value_union = _test_is(
    "functional union value",
    FunctionalValueUnion.generate,
    TSON.createIs<FunctionalValueUnion>(),
    FunctionalValueUnion.SPOILERS,
);
