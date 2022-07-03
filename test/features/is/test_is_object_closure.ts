import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_is } from "./_test_is";

export const test_is_object_closure = _test_is(
    "closured object",
    ObjectClosure.generate,
    (input) => TSON.is(input),
    [
        (input) => (input.id = (() => "id") as any),
        (input) => (input.open = "open" as any),
    ],
);
