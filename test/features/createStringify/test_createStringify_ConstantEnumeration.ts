import typia from "../../../src";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ConstantEnumeration = _test_stringify(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    typia.createStringify<ConstantEnumeration>(),
);
