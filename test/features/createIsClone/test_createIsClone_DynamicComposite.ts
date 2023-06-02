import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_createIsClone_DynamicComposite = _test_isClone(
    "DynamicComposite",
    DynamicComposite.generate,
    typia.createIsClone<DynamicComposite>(),
    DynamicComposite.SPOILERS,
);
