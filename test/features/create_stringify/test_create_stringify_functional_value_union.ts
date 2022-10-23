import TSON from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_functional_value_union = _test_stringify(
    "functional union value",
    FunctionalValueUnion.generate(),
    TSON.createStringify<FunctionalValueUnion>(),
    (json, data) => json === JSON.stringify(data),
);
