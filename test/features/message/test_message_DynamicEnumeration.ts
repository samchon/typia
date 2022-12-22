import typia from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_message } from "../internal/_test_message";

export const test_message_DynamicEnumeration = _test_message(
    "DynamicEnumeration",
    typia.message<DynamicEnumeration>(),
);