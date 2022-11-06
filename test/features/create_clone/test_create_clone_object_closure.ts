import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_clone } from "./../clone/_test_clone";

export const test_create_clone_object_closure = _test_clone(
    "closured object",
    ObjectClosure.generate,
    TSON.createClone<ObjectClosure>(),
);
