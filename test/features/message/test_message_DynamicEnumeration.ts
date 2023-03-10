import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_message_DynamicEnumeration = _test_message(
    "DynamicEnumeration",
    typia.message<DynamicEnumeration>(),
);
