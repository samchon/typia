import TSON from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_FunctionalProperty = _test_isClone(
    "FunctionalProperty",
    FunctionalProperty.generate,
    TSON.createIsClone<FunctionalProperty>(),
    FunctionalProperty.SPOILERS,
);