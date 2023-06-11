import typia from "typia";
import { DynamicArray } from "../../../../structures/DynamicArray";
import { _test_application } from "../../../../internal/_test_application";
export const test_application_ajv_DynamicArray = _test_application("ajv")("DynamicArray", typia.application<[
    DynamicArray
], "ajv">());
