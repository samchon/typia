import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_stringify_ObjectPropertyNullable = _test_stringify(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input) => typia.stringify(input),
);
