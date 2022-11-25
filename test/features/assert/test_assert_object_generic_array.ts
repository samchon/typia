import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_object_generic_array = _test_assert(
    "generic arraied object",
    ObjectGenericArray.generate,
    (input) => TSON.assert(input),
    ObjectGenericArray.SPOILERS,
);
