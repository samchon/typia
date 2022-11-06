import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_object_generic = _test_assert_clone(
    "generic object",
    ObjectGeneric.generate,
    (input) => TSON.assertClone(input),
    ObjectGeneric.SPOILERS,
);
