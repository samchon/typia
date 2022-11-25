import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ObjectClosure = _test_isStringify(
    "ObjectClosure",
    ObjectClosure.generate,
    TSON.createIsStringify<ObjectClosure>(),
    ObjectClosure.SPOILERS,
);
