import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_clone_ObjectUnionDouble = _test_clone(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => typia.clone(input),
);
