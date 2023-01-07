import typia from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ObjectUnionImplicit = _test_equals(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => typia.equals(input),
);