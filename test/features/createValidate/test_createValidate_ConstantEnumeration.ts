import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_createValidate_ConstantEnumeration = _test_validate(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    typia.createValidate<ConstantEnumeration>(),
    ConstantEnumeration.SPOILERS,
);
