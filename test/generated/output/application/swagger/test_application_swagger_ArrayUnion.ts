import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ArrayUnion } from "../../../../structures/ArrayUnion";
export const test_application_swagger_ArrayUnion = _test_application("swagger")("ArrayUnion", typia.application<[
    ArrayUnion
], "swagger">());
