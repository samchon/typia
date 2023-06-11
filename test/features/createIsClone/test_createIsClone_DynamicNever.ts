import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_createIsClone_DynamicNever = _test_isClone(
    "DynamicNever",
    DynamicNever.generate,
    typia.createIsClone<DynamicNever>(),
    DynamicNever.SPOILERS,
);
