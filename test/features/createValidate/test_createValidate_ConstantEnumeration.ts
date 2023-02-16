import typia from "typia";

import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ConstantEnumeration = _test_validate(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    typia.createValidate<ConstantEnumeration>(),
    ConstantEnumeration.SPOILERS,
);
