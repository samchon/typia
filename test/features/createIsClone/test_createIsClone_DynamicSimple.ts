import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_createIsClone_DynamicSimple = _test_isClone(
    "DynamicSimple",
    DynamicSimple.generate,
    typia.createIsClone<DynamicSimple>(),
    DynamicSimple.SPOILERS,
);
