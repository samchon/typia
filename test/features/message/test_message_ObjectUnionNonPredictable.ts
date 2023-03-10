import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_message_ObjectUnionNonPredictable = _test_message(
    "ObjectUnionNonPredictable",
    typia.message<ObjectUnionNonPredictable>(),
);
