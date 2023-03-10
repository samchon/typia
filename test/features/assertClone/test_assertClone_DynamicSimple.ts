import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_assertClone_DynamicSimple = _test_assertClone(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) => typia.assertClone(input),
    DynamicSimple.SPOILERS,
);
