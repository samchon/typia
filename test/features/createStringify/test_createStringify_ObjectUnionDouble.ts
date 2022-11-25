import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ObjectUnionDouble = _test_stringify(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    TSON.createStringify<ObjectUnionDouble>(),
);