import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_stringify_ConstantEnumeration = _test_stringify(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) => typia.stringify<ConstantEnumeration>(input),
);
