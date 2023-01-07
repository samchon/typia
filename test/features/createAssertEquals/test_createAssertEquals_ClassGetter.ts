import typia from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ClassGetter = _test_assertEquals(
    "ClassGetter",
    ClassGetter.generate,
    typia.createAssertEquals<ClassGetter>(),
);