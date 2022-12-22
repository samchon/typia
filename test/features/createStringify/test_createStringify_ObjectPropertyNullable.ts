import typia from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ObjectPropertyNullable = _test_stringify(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    typia.createStringify<ObjectPropertyNullable>(),
);
