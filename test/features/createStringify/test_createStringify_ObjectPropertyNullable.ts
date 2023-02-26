import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_createStringify_ObjectPropertyNullable = _test_stringify(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    typia.createStringify<ObjectPropertyNullable>(),
);
