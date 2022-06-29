import TSON from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_is } from "./_test_is";

export const test_is_functional_tuple = _test_is(
    "functional tuple",
    FunctionalTuple.generate,
    (input) => TSON.is(input),
);
