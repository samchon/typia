import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_object_internal = _test_assert_clone(
    "object internal",
    ObjectInternal.generate,
    (input) => TSON.assertClone(input),
    ObjectInternal.SPOILERS,
);
