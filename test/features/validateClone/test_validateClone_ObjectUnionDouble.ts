import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_validateClone_ObjectUnionDouble = _test_validateClone(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => typia.validateClone(input),
    ObjectUnionDouble.SPOILERS,
);
