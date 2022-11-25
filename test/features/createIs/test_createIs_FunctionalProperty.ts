import TSON from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_is } from "../internal/_test_is";

export const test_createIs_FunctionalProperty = _test_is(
    "FunctionalProperty",
    FunctionalProperty.generate,
    TSON.createIs<FunctionalProperty>(),
    FunctionalProperty.SPOILERS,
);
