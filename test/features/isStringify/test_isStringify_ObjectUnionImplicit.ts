import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_isStringify_ObjectUnionImplicit = _test_isStringify(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => typia.isStringify<ObjectUnionImplicit>(input),
    ObjectUnionImplicit.SPOILERS,
);
