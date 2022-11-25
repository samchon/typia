import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_object_internal = _test_assert_type(
    "object internal",
    ObjectInternal.generate,
    (input) => TSON.assertType(input),
    ObjectInternal.SPOILERS,
);
