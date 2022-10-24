import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_class_getter = _test_stringify(
    "class getter",
    ClassGetter.generate,
    (input) => TSON.stringify(input),
);
