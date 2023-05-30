import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectRecursive } from "../../../../structures/ObjectRecursive";
export const test_application_swagger_ObjectRecursive = _test_application("swagger")("ObjectRecursive", typia.application<[
    ObjectRecursive
], "swagger">());
