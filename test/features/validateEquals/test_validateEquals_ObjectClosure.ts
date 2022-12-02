import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ObjectClosure = _test_validateEquals(
    "ObjectClosure",
    ObjectClosure.generate,
    (input) => TSON.validateEquals(input),
);
