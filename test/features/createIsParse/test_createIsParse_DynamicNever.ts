import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_DynamicNever = _test_isParse(
    "DynamicNever",
    DynamicNever.generate,
    TSON.createIsParse<DynamicNever>(),
    DynamicNever.SPOILERS,
);
