import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_is } from "../internal/_test_is";

export const test_create_is_object_closure = _test_is(
    "closured object",
    ObjectClosure.generate,
    TSON.createIs<ObjectClosure>(),
    ObjectClosure.SPOILERS,
);
