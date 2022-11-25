import TSON from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_FunctionalPropertyUnion = _test_clone(
    "FunctionalPropertyUnion",
    FunctionalPropertyUnion.generate,
    TSON.createClone<FunctionalPropertyUnion>(),
);