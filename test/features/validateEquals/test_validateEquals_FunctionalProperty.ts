import typia from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_FunctionalProperty = _test_validateEquals(
    "FunctionalProperty",
    FunctionalProperty.generate,
    (input) => typia.validateEquals(input),
);