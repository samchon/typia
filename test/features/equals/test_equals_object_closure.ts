import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_object_closure = _test_equals(
    "closured object",
    ObjectClosure.generate,
    (input) => TSON.equals(input),
);
