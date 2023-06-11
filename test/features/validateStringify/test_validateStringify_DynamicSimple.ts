import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_validateStringify_DynamicSimple = _test_validateStringify(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) => typia.validateStringify(input),
    DynamicSimple.SPOILERS,
);
