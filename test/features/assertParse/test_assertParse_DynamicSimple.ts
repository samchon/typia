import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_assertParse_DynamicSimple = _test_assertParse(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) => typia.assertParse<DynamicSimple>(input),
    DynamicSimple.SPOILERS,
);
