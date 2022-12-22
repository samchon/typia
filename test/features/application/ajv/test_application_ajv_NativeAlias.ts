import typia from "../../../../src";
import { NativeAlias } from "../../../structures/NativeAlias";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_NativeAlias = 
    _test_application("ajv")(
        "NativeAlias",
        typia.application<[NativeAlias], "ajv">(),
    );