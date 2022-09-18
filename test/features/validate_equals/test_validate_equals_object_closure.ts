import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_validate_equals } from "./_test_validate_equals";

export const test_validate_equals_object_closure = _test_validate_equals(
    "closured object",
    ObjectClosure.generate,
    (input) => TSON.validateEquals(input),
);
