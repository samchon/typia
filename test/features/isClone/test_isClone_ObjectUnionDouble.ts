import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_isClone_ObjectUnionDouble = _test_isClone(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => typia.isClone(input),
    ObjectUnionDouble.SPOILERS,
);
