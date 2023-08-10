import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_misc_assertClone_ConstantEnumeration =
    _test_misc_assertClone<ConstantEnumeration>(ConstantEnumeration)((input) =>
        typia.misc.assertClone<ConstantEnumeration>(input),
    );
