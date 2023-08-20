import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_stringify_ObjectUnionImplicit = _test_stringify(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => typia.stringify<ObjectUnionImplicit>(input),
);
