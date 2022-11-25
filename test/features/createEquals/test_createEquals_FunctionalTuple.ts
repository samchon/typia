import TSON from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_FunctionalTuple = _test_equals(
    "FunctionalTuple",
    FunctionalTuple.generate,
    TSON.createEquals<FunctionalTuple>(),
);