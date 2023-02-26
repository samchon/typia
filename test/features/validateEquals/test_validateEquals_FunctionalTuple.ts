import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_validateEquals_FunctionalTuple = _test_validateEquals(
    "FunctionalTuple",
    FunctionalTuple.generate,
    (input) => typia.validateEquals(input),
);
