import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_equals_FunctionalTuple = _test_equals(
    "FunctionalTuple",
    FunctionalTuple.generate,
    (input) => typia.equals(input),
);
