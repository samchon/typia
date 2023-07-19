import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_validate_ConstantEnumeration =
    _test_validate<ConstantEnumeration>(ConstantEnumeration)((input) =>
        typia.validate(input),
    );
