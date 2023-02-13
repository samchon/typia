import typia from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ClassGetter = _test_clone(
    "ClassGetter",
    ClassGetter.generate,
    typia.createClone<ClassGetter>(),
);