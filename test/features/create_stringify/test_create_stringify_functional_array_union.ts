import TSON from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_functional_array_union = _test_stringify(
    "functional union array",
    FunctionalArrayUnion.generate(),
    TSON.createStringify<FunctionalArrayUnion>(),
);
