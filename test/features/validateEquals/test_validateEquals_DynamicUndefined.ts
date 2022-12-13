import typia from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_DynamicUndefined = _test_validateEquals(
    "DynamicUndefined",
    DynamicUndefined.generate,
    (input) => typia.validateEquals(input),
);