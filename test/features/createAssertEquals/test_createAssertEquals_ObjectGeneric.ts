import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_assertEquals_ObjectGeneric = _test_assertEquals(
    "ObjectGeneric",
    ObjectGeneric.generate,
    typia.createAssertEquals<ObjectGeneric>(),
);
