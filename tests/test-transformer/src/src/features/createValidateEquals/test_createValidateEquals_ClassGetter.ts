import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_createValidateEquals_ClassGetter = (): void => _test_validateEquals(
    "ClassGetter",
)<ClassGetter>(
    ClassGetter
)(typia.createValidateEquals<ClassGetter>());
