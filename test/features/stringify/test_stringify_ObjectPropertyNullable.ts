import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ObjectPropertyNullable = _test_stringify(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input) => TSON.stringify(input),
);
