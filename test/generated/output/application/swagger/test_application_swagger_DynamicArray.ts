import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { DynamicArray } from "../../../../structures/DynamicArray";
export const test_application_swagger_DynamicArray = _test_application("swagger")("DynamicArray", typia.application<[
    DynamicArray
], "swagger">());
