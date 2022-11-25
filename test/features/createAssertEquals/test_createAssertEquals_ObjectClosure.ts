import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ObjectClosure = _test_assertEquals(
    "ObjectClosure",
    ObjectClosure.generate,
    TSON.createAssertEquals<ObjectClosure>(),
);
