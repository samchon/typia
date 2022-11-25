import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ClassGetter = _test_equals(
    "ClassGetter",
    ClassGetter.generate,
    TSON.createEquals<ClassGetter>(),
);