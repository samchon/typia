import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_message_ObjectInternal = _test_message(
    "ObjectInternal",
    typia.message<ObjectInternal>(),
);
