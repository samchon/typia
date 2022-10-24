import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_object_union_non_predictable =
    _test_stringify(
        "union object",
        ObjectUnionNonPredictable.generate,
        TSON.createStringify<ObjectUnionNonPredictable>(),
    );
