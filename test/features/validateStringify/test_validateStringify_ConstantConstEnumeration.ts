import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_validateStringify_ConstantConstEnumeration =
    _test_validateStringify(
        "ConstantConstEnumeration",
        ConstantConstEnumeration.generate,
        (input) => typia.validateStringify(input),
        ConstantConstEnumeration.SPOILERS,
    );
