import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_clone_ObjectPropertyNullable = _test_clone(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input) => typia.clone(input),
);
