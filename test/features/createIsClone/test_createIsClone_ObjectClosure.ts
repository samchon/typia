import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ObjectClosure = _test_isClone(
    "ObjectClosure",
    ObjectClosure.generate,
    TSON.createIsClone<ObjectClosure>(),
    ObjectClosure.SPOILERS,
);