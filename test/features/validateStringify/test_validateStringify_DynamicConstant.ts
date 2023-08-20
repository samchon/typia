import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_validateStringify_DynamicConstant = _test_validateStringify(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => typia.validateStringify<DynamicConstant>(input),
    DynamicConstant.SPOILERS,
);
