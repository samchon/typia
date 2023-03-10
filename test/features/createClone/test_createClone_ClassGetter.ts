import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_createClone_ClassGetter = _test_clone(
    "ClassGetter",
    ClassGetter.generate,
    typia.createClone<ClassGetter>(),
);
