import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ObjectClosure = _test_clone(
    "ObjectClosure",
    ObjectClosure.generate,
    TSON.createClone<ObjectClosure>(),
);
