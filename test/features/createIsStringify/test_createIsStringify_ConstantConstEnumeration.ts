import TSON from "../../../src";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ConstantConstEnumeration =
    _test_isStringify(
        "ConstantConstEnumeration",
        ConstantConstEnumeration.generate,
        TSON.createIsStringify<ConstantConstEnumeration>(),
        ConstantConstEnumeration.SPOILERS,
    );
