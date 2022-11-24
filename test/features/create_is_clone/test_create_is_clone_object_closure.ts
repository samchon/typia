import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_object_closure = _test_is_clone(
    "closured object",
    ObjectClosure.generate,
    TSON.createIsClone<ObjectClosure>(),
    ObjectClosure.SPOILERS,
);
