import TSON from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_functional_tuple = _test_is_stringify(
    "functional tuple",
    FunctionalTuple.generate,
    TSON.createIsStringify<FunctionalTuple>(),
    FunctionalTuple.SPOILERS,
);
