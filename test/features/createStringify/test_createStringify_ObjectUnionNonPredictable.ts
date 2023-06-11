import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_createStringify_ObjectUnionNonPredictable = _test_stringify(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    typia.createStringify<ObjectUnionNonPredictable>(),
);
