import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_isClone_DynamicSimple = _test_isClone(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) => typia.isClone<DynamicSimple>(input),
    DynamicSimple.SPOILERS,
);
