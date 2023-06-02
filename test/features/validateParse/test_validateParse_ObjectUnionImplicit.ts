import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_validateParse_ObjectUnionImplicit = _test_validateParse(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => typia.validateParse<ObjectUnionImplicit>(input),
    ObjectUnionImplicit.SPOILERS,
);
