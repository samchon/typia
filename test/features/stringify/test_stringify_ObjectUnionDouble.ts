import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_stringify_ObjectUnionDouble = _test_stringify(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => typia.stringify(input),
);
