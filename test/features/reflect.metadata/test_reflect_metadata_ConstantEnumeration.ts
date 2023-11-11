import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_reflect_metadata_ConstantEnumeration = _test_reflect_metadata(
    "ConstantEnumeration",
)(typia.reflect.metadata<[ConstantEnumeration]>());
