import TSON from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_FunctionalPropertyUnion = _test_stringify(
    "FunctionalPropertyUnion",
    FunctionalPropertyUnion.generate,
    (input) => TSON.stringify(input),
);
