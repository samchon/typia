import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { NativeAlias } from "../../../../structures/NativeAlias";
export const test_application_ajv_NativeAlias = _test_application("ajv")("NativeAlias", typia.application<[
    NativeAlias
], "ajv">());
