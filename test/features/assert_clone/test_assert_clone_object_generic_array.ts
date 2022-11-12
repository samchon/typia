import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_object_generic_array = _test_assert_clone(
    "generic arraied object",
    ObjectGenericArray.generate,
    (input) => TSON.assertClone(input),
    ObjectGenericArray.SPOILERS,
);
