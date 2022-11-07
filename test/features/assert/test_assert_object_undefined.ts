import TSON from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_assert } from "./_test_assert";

export const test_assert_object_undefined = _test_assert(
    "undefined object",
    ObjectUndefined.generate,
    (input) => TSON.assert(input),
    ObjectUndefined.SPOILERS,
);
