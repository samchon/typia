import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_assert } from "./_test_assert";

export const test_assert_object_optional = _test_assert(
    "optional object",
    ObjectOptional.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input.id = 0 as any;
            return "$input.id";
        },
        (input) => {
            input.name = [] as any;
            return "$input.name";
        },
        (input) => {
            input.email = {} as any;
            return "$input.email";
        },
        (input) => {
            input.sequence = "0" as any;
            return "$input.sequence";
        },
    ],
);
