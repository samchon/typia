import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_validateClone_ObjectPropertyNullable = _test_validateClone(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input) => typia.validateClone(input),
    ObjectPropertyNullable.SPOILERS,
);
