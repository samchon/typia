import typia from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ObjectUnionImplicit = _test_stringify(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => typia.stringify(input),
);
