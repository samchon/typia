import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_equals_ConstantConstEnumeration =
    _test_equals<ConstantConstEnumeration>(ConstantConstEnumeration)((input) =>
        typia.equals<ConstantConstEnumeration>(input),
    );
