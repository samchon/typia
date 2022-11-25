import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ObjectClosure = _test_assertClone(
    "ObjectClosure",
    ObjectClosure.generate,
    TSON.createAssertClone<ObjectClosure>(),
    ObjectClosure.SPOILERS,
);
