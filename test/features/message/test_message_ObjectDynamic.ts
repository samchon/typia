import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_message_ObjectDynamic = _test_message(
    "ObjectDynamic",
    typia.message<ObjectDynamic>(),
);
