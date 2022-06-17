import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_is } from "./_test_is";

export const test_is_object_closure = _test_is(
    "closured object",
    ObjectClosure.generate,
    (input) => TSON.is(input),
);
