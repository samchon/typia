import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectGeneric } from "../../../../structures/ObjectGeneric";
export const test_application_swagger_ObjectGeneric = _test_application("swagger")("ObjectGeneric", typia.application<[
    ObjectGeneric
], "swagger">());
