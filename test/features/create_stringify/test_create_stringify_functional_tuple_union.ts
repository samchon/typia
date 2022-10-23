import TSON from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_functional_tuple_union = _test_stringify(
    "functional union tuple",
    FunctionalTupleUnion.generate(),
    TSON.createStringify<FunctionalTupleUnion>(),
    (json, data) => json === JSON.stringify(data),
);
