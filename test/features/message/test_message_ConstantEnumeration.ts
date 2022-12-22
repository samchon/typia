import typia from "../../../src";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_message } from "../internal/_test_message";

export const test_message_ConstantEnumeration = _test_message(
    "ConstantEnumeration",
    typia.message<ConstantEnumeration>(),
);