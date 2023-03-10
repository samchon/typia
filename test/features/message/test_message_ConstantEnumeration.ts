import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_message_ConstantEnumeration = _test_message(
    "ConstantEnumeration",
    typia.message<ConstantEnumeration>(),
);
