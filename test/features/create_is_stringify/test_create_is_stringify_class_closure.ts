import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_create_is_stringify_class_closure = _test_is_stringify(
    "class closure",
    ClassGetter.generate,
    TSON.createIsStringify<ClassGetter>(),
    ClassGetter.SPOILERS,
);
