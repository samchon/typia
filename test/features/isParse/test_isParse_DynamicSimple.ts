import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_DynamicSimple = _test_isParse(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) => TSON.isParse<DynamicSimple>(input),
    DynamicSimple.SPOILERS,
);
