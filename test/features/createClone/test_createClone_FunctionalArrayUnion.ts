import TSON from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_FunctionalArrayUnion = _test_clone(
    "FunctionalArrayUnion",
    FunctionalArrayUnion.generate,
    TSON.createClone<FunctionalArrayUnion>(),
);
