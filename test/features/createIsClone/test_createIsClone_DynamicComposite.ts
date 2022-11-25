import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_DynamicComposite = _test_isClone(
    "DynamicComposite",
    DynamicComposite.generate,
    TSON.createIsClone<DynamicComposite>(),
    DynamicComposite.SPOILERS,
);