import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_object_alias = _test_assert_clone(
    "aliased object",
    ObjectAlias.generate,
    (input) => TSON.assertClone(input),
    ObjectAlias.SPOILERS,
);
