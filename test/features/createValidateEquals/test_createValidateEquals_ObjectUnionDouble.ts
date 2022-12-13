import typia from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ObjectUnionDouble = _test_validateEquals(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    typia.createValidateEquals<ObjectUnionDouble>(),
);