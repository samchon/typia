import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ArraySimple } from "../../../../structures/ArraySimple";
export const test_application_swagger_ArraySimple = _test_application("swagger")("ArraySimple", typia.application<[
    ArraySimple
], "swagger">());
