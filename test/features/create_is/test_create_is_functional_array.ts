import TSON from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_is } from "./../is/_test_is";

export const test_create_is_functional_array = _test_is(
    "functional array",
    FunctionalArray.generate,
    TSON.createIs<FunctionalArray>(),
    FunctionalArray.SPOILERS,
);
