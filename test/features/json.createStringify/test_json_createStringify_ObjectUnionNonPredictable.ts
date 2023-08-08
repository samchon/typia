import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_json_stringify_ObjectUnionNonPredictable =
    _test_json_stringify(
        "ObjectUnionNonPredictable",
        ObjectUnionNonPredictable.generate,
        typia.json.createStringify<ObjectUnionNonPredictable>(),
    );
