import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ObjectClosure = _test_isClone(
    "ObjectClosure",
    ObjectClosure.generate,
    (input) => TSON.isClone(input),
    ObjectClosure.SPOILERS,
);
