import typia from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_FunctionalValueUnion = _test_stringify(
    "FunctionalValueUnion",
    FunctionalValueUnion.generate,
    (input) => typia.stringify(input),
);