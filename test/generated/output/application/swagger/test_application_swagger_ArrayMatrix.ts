import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ArrayMatrix } from "../../../../structures/ArrayMatrix";
export const test_application_swagger_ArrayMatrix = _test_application("swagger")("ArrayMatrix", typia.application<[
    ArrayMatrix
], "swagger">());
