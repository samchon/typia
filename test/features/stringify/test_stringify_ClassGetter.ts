import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ClassGetter = _test_stringify(
    "ClassGetter",
    ClassGetter.generate,
    (input) => TSON.stringify(input),
);
