import typia from "../../../src";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ConstantConstEnumeration = _test_stringify(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    typia.createStringify<ConstantConstEnumeration>(),
);