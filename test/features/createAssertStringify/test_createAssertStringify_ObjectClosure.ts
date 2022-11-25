import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ObjectClosure = _test_assertStringify(
    "ObjectClosure",
    ObjectClosure.generate,
    TSON.createAssertStringify<ObjectClosure>(),
    ObjectClosure.SPOILERS,
);