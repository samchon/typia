import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_validateEquals_ClassGetter = _test_validateEquals(
    "ClassGetter",
    ClassGetter.generate,
    (input) => typia.validateEquals<ClassGetter>(input),
);
