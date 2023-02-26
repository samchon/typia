import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_createIsParse_DynamicNever = _test_isParse(
    "DynamicNever",
    DynamicNever.generate,
    typia.createIsParse<DynamicNever>(),
    DynamicNever.SPOILERS,
);
