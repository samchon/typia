import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_reflect_metadata_ConstantConstEnumeration =
    _test_reflect_metadata("ConstantConstEnumeration")(
        typia.reflect.metadata<[ConstantConstEnumeration]>(),
    );
