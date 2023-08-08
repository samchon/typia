import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_misc_assertClone_DynamicSimple = _test_misc_assertClone(
    "DynamicSimple",
    DynamicSimple.generate,
    typia.misc.createAssertClone<DynamicSimple>(),
    DynamicSimple.SPOILERS,
);
