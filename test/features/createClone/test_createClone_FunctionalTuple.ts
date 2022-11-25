import TSON from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_FunctionalTuple = _test_clone(
    "FunctionalTuple",
    FunctionalTuple.generate,
    TSON.createClone<FunctionalTuple>(),
);
