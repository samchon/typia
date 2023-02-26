import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_createValidateEquals_ObjectUnionDouble = _test_validateEquals(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    typia.createValidateEquals<ObjectUnionDouble>(),
);
