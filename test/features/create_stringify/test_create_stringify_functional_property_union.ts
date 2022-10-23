import TSON from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_functional_property_union = _test_stringify(
    "functional union property",
    FunctionalPropertyUnion.generate(),
    TSON.createStringify<FunctionalPropertyUnion>(),
);
