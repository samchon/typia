import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_stringify_ConstantConstEnumeration = _test_stringify(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input) => typia.stringify<ConstantConstEnumeration>(input),
);
