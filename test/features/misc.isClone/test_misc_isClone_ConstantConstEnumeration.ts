import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_misc_isClone_ConstantConstEnumeration =
    _test_misc_isClone<ConstantConstEnumeration>(ConstantConstEnumeration)(
        (input) => typia.misc.isClone(input),
    );
