import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ObjectClosure = _test_equals(
    "ObjectClosure",
    ObjectClosure.generate,
    TSON.createEquals<ObjectClosure>(),
);