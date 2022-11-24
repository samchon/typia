import TSON from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_stringify } from "../internal/_test_stringify";

export const test_create_stringify_functional_property = _test_stringify(
    "functional property",
    FunctionalProperty.generate,
    TSON.createStringify<FunctionalProperty>(),
);
