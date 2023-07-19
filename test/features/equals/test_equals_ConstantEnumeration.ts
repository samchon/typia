import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_equals_ConstantEnumeration =
    _test_equals<ConstantEnumeration>(ConstantEnumeration)((input) =>
        typia.equals(input),
    );
