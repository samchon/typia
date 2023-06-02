import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_createStringify_ObjectUnionDouble = _test_stringify(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    typia.createStringify<ObjectUnionDouble>(),
);
