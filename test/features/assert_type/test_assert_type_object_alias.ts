import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_object_alias = _test_assert_type(
    "aliased object",
    ObjectAlias.generate,
    (input) => TSON.assertType(input),
    ObjectAlias.SPOILERS,
);
