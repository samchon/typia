import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_assertEquals_ObjectClosure = _test_assertEquals(
    "ObjectClosure",
    ObjectClosure.generate,
    typia.createAssertEquals<ObjectClosure>(),
);
