import TSON from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_is } from "./../is/_test_is";

export const test_create_is_functional_tuple = _test_is(
    "functional tuple",
    FunctionalTuple.generate,
    TSON.createIs<FunctionalTuple>(),
    FunctionalTuple.SPOILERS,
);
