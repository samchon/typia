import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_assert } from "./_test_assert";

export const test_assert_object_closure = _test_assert(
    "closured object",
    ObjectClosure.generate,
    (input) => TSON.assertType(input),
    ObjectClosure.SPOILERS,
);
