import TSON from "../../../src";
import { ObjectUndefied } from "../../structures/ObjectUndefied";
import { _test_assert_equals } from "./_test_assert_equals";

export const test_assert_equals_object_undefined = _test_assert_equals(
    "undefined object",
    ObjectUndefied.generate,
    (input) => TSON.assertEquals(input),
);
