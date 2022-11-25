import TSON from "../../../src";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ConstantConstEnumeration =
    _test_validateEquals(
        "ConstantConstEnumeration",
        ConstantConstEnumeration.generate,
        (input) => TSON.validateEquals(input),
    );
