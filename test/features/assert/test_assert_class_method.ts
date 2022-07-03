import TSON from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_assert } from "./_test_assert";

export const test_assert_class_method = _test_assert(
    "class method",
    ClassMethod.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            (input as any).name = [];
            return "$input.name";
        },
        (input) => {
            (input as any).age = () => 3;
            return "$input.age";
        },
    ],
);
