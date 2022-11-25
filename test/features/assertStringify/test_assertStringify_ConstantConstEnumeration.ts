import TSON from "../../../src";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ConstantConstEnumeration =
    _test_assertStringify(
        "ConstantConstEnumeration",
        ConstantConstEnumeration.generate,
        (input) => TSON.assertStringify(input),
        ConstantConstEnumeration.SPOILERS,
    );
