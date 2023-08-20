import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_equals_FunctionalObjectUnion = _test_equals(
    "FunctionalObjectUnion",
    FunctionalObjectUnion.generate,
    (input) => typia.equals<FunctionalObjectUnion>(input),
);
