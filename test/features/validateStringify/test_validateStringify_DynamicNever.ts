import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_DynamicNever = _test_validateStringify(
    "DynamicNever",
    DynamicNever.generate,
    (input) => TSON.validateStringify(input),
    DynamicNever.SPOILERS,
);
