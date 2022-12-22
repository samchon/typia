import typia from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_FunctionalValueUnion = _test_validateEquals(
    "FunctionalValueUnion",
    FunctionalValueUnion.generate,
    (input) => typia.validateEquals(input),
);
