import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_createValidateParse_ObjectUnionDouble = _test_validateParse(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    typia.createValidateParse<ObjectUnionDouble>(),
    ObjectUnionDouble.SPOILERS,
);
