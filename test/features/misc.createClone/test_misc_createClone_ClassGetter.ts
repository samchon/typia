import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_misc_clone_ClassGetter = _test_misc_clone(
    "ClassGetter",
    ClassGetter.generate,
    typia.misc.createClone<ClassGetter>(),
);
