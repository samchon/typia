import TSON from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_functional_tuple = _test_stringify(
    "functional tuple",
    FunctionalTuple.generate(),
    (input) => TSON.stringify(input),
);
