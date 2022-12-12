import typia from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_FunctionalObjectUnion = _test_stringify(
    "FunctionalObjectUnion",
    FunctionalObjectUnion.generate,
    (input) => typia.stringify(input),
);
