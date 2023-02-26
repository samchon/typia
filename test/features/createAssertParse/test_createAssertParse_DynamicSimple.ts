import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_createAssertParse_DynamicSimple = _test_assertParse(
    "DynamicSimple",
    DynamicSimple.generate,
    typia.createAssertParse<DynamicSimple>(),
    DynamicSimple.SPOILERS,
);
