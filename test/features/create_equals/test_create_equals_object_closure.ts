import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_equals } from "./../equals/_test_equals";

export const test_create_equals_object_closure = _test_equals(
    "closured object",
    ObjectClosure.generate,
    TSON.createEquals<ObjectClosure>(),
);
