import TSON from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_FunctionalValueUnion = _test_clone(
    "FunctionalValueUnion",
    FunctionalValueUnion.generate,
    TSON.createClone<FunctionalValueUnion>(),
);