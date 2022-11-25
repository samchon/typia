import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ObjectClosure = _test_validate(
    "ObjectClosure",
    ObjectClosure.generate,
    (input) => TSON.validate(input),
    ObjectClosure.SPOILERS,
);