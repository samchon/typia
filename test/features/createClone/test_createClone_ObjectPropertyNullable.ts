import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_createClone_ObjectPropertyNullable = _test_clone(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    typia.createClone<ObjectPropertyNullable>(),
);
