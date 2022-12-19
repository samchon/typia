import typia from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ClassGetter = _test_is(
    "ClassGetter",
    ClassGetter.generate,
    typia.createIs<ClassGetter>(),
    ClassGetter.SPOILERS,
);