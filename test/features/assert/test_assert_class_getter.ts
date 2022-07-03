import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_assert } from "./_test_assert";

export const test_assert_class_getter = _test_assert(
    "class getter",
    ClassGetter.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            (input as any).id = 3;
            return "$input.id";
        },
        (input) => {
            (input as any).name = null;
            return "$input.name";
        },
        (input) => {
            (input as any).dead = "alive";
            return "$input.dead";
        },
    ],
);
