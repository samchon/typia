import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_createIsParse_DynamicSimple = _test_isParse(
    "DynamicSimple",
    DynamicSimple.generate,
    typia.createIsParse<DynamicSimple>(),
    DynamicSimple.SPOILERS,
);
