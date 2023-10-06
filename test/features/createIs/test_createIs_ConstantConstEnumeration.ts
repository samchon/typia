import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_createIs_ConstantConstEnumeration = _test_is(
    "ConstantConstEnumeration",
)<ConstantConstEnumeration>(ConstantConstEnumeration)(
    typia.createIs<ConstantConstEnumeration>(),
);
