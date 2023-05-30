import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectTuple } from "../../../../structures/ObjectTuple";
export const test_application_swagger_ObjectTuple = _test_application("swagger")("ObjectTuple", typia.application<[
    ObjectTuple
], "swagger">());
