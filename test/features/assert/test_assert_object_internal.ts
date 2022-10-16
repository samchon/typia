import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_assert } from "./_test_assert";

export const test_assert_object_internal = _test_assert(
    "object internal",
    ObjectInternal.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input.name = false as any;
            return "$input.name";
        },
        (input) => {
            input.id = 1 as any;
            return "$input.id";
        },
    ],
);
