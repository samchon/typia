import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_object_closure = _test_assert_stringify(
    "closured object",
    ObjectClosure.generate,
    (input) => TSON.assertStringify(input),
    ObjectClosure.SPOILERS,
);
