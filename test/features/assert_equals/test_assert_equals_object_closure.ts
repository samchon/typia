import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_assert_equals_object_closure = _test_assert_equals(
    "closured object",
    ObjectClosure.generate,
    (input) => TSON.assertEquals(input),
);
