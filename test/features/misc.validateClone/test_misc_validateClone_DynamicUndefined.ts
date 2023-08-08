import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_misc_validateClone_DynamicUndefined =
    _test_misc_validateClone(
        "DynamicUndefined",
        DynamicUndefined.generate,
        (input) => typia.misc.validateClone(input),
        DynamicUndefined.SPOILERS,
    );
