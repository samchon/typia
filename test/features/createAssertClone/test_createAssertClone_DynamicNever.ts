import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_DynamicNever = _test_assertClone(
    "DynamicNever",
    DynamicNever.generate,
    TSON.createAssertClone<DynamicNever>(),
    DynamicNever.SPOILERS,
);
