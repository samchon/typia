import TSON from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_functional_array = _test_stringify(
    "functional array",
    FunctionalArray.generate(),
    TSON.createStringify<FunctionalArray>(),
);
