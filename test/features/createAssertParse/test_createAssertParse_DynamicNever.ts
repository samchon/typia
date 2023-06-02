import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_createAssertParse_DynamicNever = _test_assertParse(
    "DynamicNever",
    DynamicNever.generate,
    typia.createAssertParse<DynamicNever>(),
    DynamicNever.SPOILERS,
);
