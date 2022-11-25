import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_object_closure = _test_assert_type(
    "closured object",
    ObjectClosure.generate,
    (input) => TSON.assertType(input),
    ObjectClosure.SPOILERS,
);
