import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_object_closure = _test_is_clone(
    "closured object",
    ObjectClosure.generate,
    (input) => TSON.isClone(input),
    ObjectClosure.SPOILERS,
);
