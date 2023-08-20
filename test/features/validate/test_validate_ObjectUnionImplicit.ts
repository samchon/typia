import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_validate_ObjectUnionImplicit = _test_validate(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => typia.validate<ObjectUnionImplicit>(input),
    ObjectUnionImplicit.SPOILERS,
);
