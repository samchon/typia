import typia from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_DynamicUnion = _test_validateEquals(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => typia.validateEquals(input),
);