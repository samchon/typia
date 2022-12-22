import typia from "../../../src";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_message } from "../internal/_test_message";

export const test_message_ConstantConstEnumeration = _test_message(
    "ConstantConstEnumeration",
    typia.message<ConstantConstEnumeration>(),
);