import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_create_is_stringify_object_closure = _test_is_stringify(
    "closured object",
    ObjectClosure.generate,
    TSON.createIsStringify<ObjectClosure>(),
    ObjectClosure.SPOILERS,
);
