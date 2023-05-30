import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ArrayAny } from "../../../../structures/ArrayAny";
export const test_application_swagger_ArrayAny = _test_application("swagger")("ArrayAny", typia.application<[
    ArrayAny
], "swagger">());
