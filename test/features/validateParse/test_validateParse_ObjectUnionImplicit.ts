import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_ObjectUnionImplicit = _test_validateParse(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => TSON.validateParse<ObjectUnionImplicit>(input),
    ObjectUnionImplicit.SPOILERS,
);
