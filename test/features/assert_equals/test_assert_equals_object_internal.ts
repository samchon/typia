import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_assert_equals } from "./_test_assert_equals";

export const test_assert_equals_object_internal = _test_assert_equals(
    "object internal",
    ObjectInternal.generate,
    (input) => TSON.assertEquals(input),
);
