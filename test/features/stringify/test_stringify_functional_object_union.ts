import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_functional_object_union = _test_stringify(
    "functional union object",
    FunctionalObjectUnion.generate,
    (input) => TSON.stringify(input),
);
