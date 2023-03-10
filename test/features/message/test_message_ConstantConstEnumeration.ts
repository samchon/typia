import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_message_ConstantConstEnumeration = _test_message(
    "ConstantConstEnumeration",
    typia.message<ConstantConstEnumeration>(),
);
