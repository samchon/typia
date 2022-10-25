import TSON from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_functional_property = _test_is_stringify(
    "functional property",
    FunctionalProperty.generate,
    TSON.createIsStringify<FunctionalProperty>(),
    FunctionalProperty.SPOILERS,
);
