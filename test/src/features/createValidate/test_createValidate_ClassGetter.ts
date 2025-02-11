import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_createValidate_ClassGetter = _test_validate(
    "ClassGetter",
)<ClassGetter>(
    ClassGetter
)(typia.createValidate<ClassGetter>());
