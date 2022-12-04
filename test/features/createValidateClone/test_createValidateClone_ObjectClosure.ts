import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ObjectClosure = _test_validateClone(
    "ObjectClosure",
    ObjectClosure.generate,
    TSON.createValidateClone<ObjectClosure>(),
    ObjectClosure.SPOILERS,
);
