import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_isParse_DynamicSimple = _test_isParse(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) => typia.isParse<DynamicSimple>(input),
    DynamicSimple.SPOILERS,
);
