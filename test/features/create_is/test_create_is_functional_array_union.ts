import TSON from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_is } from "./../is/_test_is";

export const test_create_is_functional_array_union = _test_is(
    "functional union array",
    FunctionalArrayUnion.generate,
    TSON.createIs<FunctionalArrayUnion>(),
    FunctionalArrayUnion.SPOILERS,
);
