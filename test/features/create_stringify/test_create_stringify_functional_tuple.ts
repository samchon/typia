import TSON from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_functional_tuple = _test_stringify(
    "functional tuple",
    FunctionalTuple.generate,
    TSON.createStringify<FunctionalTuple>(),
);
