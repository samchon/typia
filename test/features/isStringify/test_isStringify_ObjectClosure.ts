import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ObjectClosure = _test_isStringify(
    "ObjectClosure",
    ObjectClosure.generate,
    (input) => TSON.isStringify(input),
    ObjectClosure.SPOILERS,
);