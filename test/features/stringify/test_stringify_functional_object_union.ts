import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_stringify_for_of } from "./_test_stringify_for_of";

export const test_stringify_functional_object_union = _test_stringify_for_of(
    "functional union object",
    FunctionalObjectUnion.generate(),
    (input) => TSON.stringify(input),
);
