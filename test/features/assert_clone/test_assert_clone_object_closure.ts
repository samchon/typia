import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_object_closure = _test_assert_clone(
    "closured object",
    ObjectClosure.generate,
    (input) => TSON.assertClone(input),
    ObjectClosure.SPOILERS,
);
