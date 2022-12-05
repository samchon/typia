import TSON from "../../../src";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ConstantEnumeration =
    _test_validateStringify(
        "ConstantEnumeration",
        ConstantEnumeration.generate,
        (input) => TSON.validateStringify(input),
        ConstantEnumeration.SPOILERS,
    );
