import typia from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ObjectUnionImplicit = _test_validateEquals(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    typia.createValidateEquals<ObjectUnionImplicit>(),
);