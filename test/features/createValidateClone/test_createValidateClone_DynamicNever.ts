import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_createValidateClone_DynamicNever = _test_validateClone(
    "DynamicNever",
    DynamicNever.generate,
    typia.createValidateClone<DynamicNever>(),
    DynamicNever.SPOILERS,
);
