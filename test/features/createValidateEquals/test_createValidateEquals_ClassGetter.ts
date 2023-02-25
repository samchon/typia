import typia from "../../../src";

import { ClassGetter } from "../../structures/ClassGetter";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ClassGetter = _test_validateEquals(
    "ClassGetter",
    ClassGetter.generate,
    typia.createValidateEquals<ClassGetter>(),
);
