import TSON from "../../../src";
import { ObjectUndefied } from "../../structures/ObjectUndefied";
import { _test_assert } from "./_test_assert";

export const test_assert_object_undefined = _test_assert(
    "undefined object",
    ObjectUndefied.generate,
    (input) => TSON.assertType(input),
    ObjectUndefied.SPOILERS,
);
