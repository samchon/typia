import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_is } from "../internal/_test_is";

export const test_is_ObjectClosure = _test_is(
    "ObjectClosure",
    ObjectClosure.generate,
    (input) => TSON.is(input),
    ObjectClosure.SPOILERS,
);
