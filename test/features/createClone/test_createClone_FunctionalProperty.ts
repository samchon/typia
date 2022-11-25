import TSON from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_FunctionalProperty = _test_clone(
    "FunctionalProperty",
    FunctionalProperty.generate,
    TSON.createClone<FunctionalProperty>(),
);