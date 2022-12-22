import typia from "../../../src";
import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectDynamic = _test_message(
    "ObjectDynamic",
    typia.message<ObjectDynamic>(),
);