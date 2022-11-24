import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_stringify } from "../internal/_test_stringify";

export const test_create_stringify_class_closure = _test_stringify(
    "class closure",
    ClassGetter.generate,
    TSON.createStringify<ClassGetter>(),
);
