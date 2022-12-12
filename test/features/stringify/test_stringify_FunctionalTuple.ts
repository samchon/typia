import typia from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_FunctionalTuple = _test_stringify(
    "FunctionalTuple",
    FunctionalTuple.generate,
    (input) => typia.stringify(input),
);
