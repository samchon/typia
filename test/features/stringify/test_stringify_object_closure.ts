import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_object_closure = _test_stringify(
    "closured object",
    ObjectClosure.generate,
    (input) => TSON.stringify(input),
);
