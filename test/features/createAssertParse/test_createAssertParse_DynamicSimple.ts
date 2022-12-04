import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_DynamicSimple = _test_assertParse(
    "DynamicSimple",
    DynamicSimple.generate,
    TSON.createAssertParse<DynamicSimple>(),
    DynamicSimple.SPOILERS,
);
