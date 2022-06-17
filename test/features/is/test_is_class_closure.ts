import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_is } from "./_test_is";

export const test_is_class_closure = _test_is(
    "class closure",
    ClassGetter.generate,
    (input) => TSON.is(input),
);
