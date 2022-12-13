import typia from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ObjectUnionExplicit = _test_validateEquals(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    typia.createValidateEquals<ObjectUnionExplicit>(),
);