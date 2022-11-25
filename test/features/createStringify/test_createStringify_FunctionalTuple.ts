import TSON from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_FunctionalTuple = _test_stringify(
    "FunctionalTuple",
    FunctionalTuple.generate,
    TSON.createStringify<FunctionalTuple>(),
);
