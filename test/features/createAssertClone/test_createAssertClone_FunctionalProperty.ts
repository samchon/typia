import TSON from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_FunctionalProperty = _test_assertClone(
    "FunctionalProperty",
    FunctionalProperty.generate,
    TSON.createAssertClone<FunctionalProperty>(),
    FunctionalProperty.SPOILERS,
);
