import TSON from "../../../src";
import { ObjectUndefied } from "../../structures/ObjectUndefied";
import { _test_assert } from "./_test_assert";

export const test_assert_object_undefined = _test_assert(
    "undefined object",
    ObjectUndefied.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input[0].professor = null!;
            return "$input[0].professor";
        },
        (input) => {
            input[0].classroom = [] as any;
            return "$input[0].classroom.id";
        },
        (input) => {
            input[0].nothing = "undefined" as any;
            return "$input[0].nothing";
        },
    ],
);
