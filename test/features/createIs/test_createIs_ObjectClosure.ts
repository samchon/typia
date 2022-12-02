import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectClosure = _test_is(
    "ObjectClosure",
    ObjectClosure.generate,
    TSON.createIs<ObjectClosure>(),
    ObjectClosure.SPOILERS,
);
