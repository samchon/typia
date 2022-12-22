import typia from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectUnionNonPredictable = _test_message(
    "ObjectUnionNonPredictable",
    typia.message<ObjectUnionNonPredictable>(),
);