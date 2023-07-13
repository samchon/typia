import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_assertEquals_ObjectUnionExplicit = _test_assertEquals(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    typia.createAssertEquals<ObjectUnionExplicit>(),
);
