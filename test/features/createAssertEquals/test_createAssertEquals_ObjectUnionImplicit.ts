import typia from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ObjectUnionImplicit = _test_assertEquals(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    typia.createAssertEquals<ObjectUnionImplicit>(),
);
