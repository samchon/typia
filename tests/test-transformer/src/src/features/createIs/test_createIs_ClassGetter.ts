import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_createIs_ClassGetter = (): void => _test_is(
    "ClassGetter",
)<ClassGetter>(
    ClassGetter
)(typia.createIs<ClassGetter>());
