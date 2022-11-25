import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_functional_object_union = _test_is_stringify(
    "functional union object",
    FunctionalObjectUnion.generate,
    (input) => TSON.isStringify(input),
    FunctionalObjectUnion.SPOILERS,
);
