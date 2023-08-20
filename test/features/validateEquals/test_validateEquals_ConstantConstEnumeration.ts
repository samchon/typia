import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_validateEquals_ConstantConstEnumeration =
    _test_validateEquals(
        "ConstantConstEnumeration",
        ConstantConstEnumeration.generate,
        (input) => typia.validateEquals<ConstantConstEnumeration>(input),
    );
