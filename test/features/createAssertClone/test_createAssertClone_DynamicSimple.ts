import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_createAssertClone_DynamicSimple = _test_assertClone(
    "DynamicSimple",
    DynamicSimple.generate,
    typia.createAssertClone<DynamicSimple>(),
    DynamicSimple.SPOILERS,
);
