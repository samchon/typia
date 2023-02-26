import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_assertParse_DynamicNever = _test_assertParse(
    "DynamicNever",
    DynamicNever.generate,
    (input) => typia.assertParse<DynamicNever>(input),
    DynamicNever.SPOILERS,
);
