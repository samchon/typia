import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_ObjectUnionExplicit = _test_validateParse(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input) => TSON.validateParse<ObjectUnionExplicit>(input),
    ObjectUnionExplicit.SPOILERS,
);
