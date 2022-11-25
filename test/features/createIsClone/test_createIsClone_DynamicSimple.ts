import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_DynamicSimple = _test_isClone(
    "DynamicSimple",
    DynamicSimple.generate,
    TSON.createIsClone<DynamicSimple>(),
    DynamicSimple.SPOILERS,
);