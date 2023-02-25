import typia from "typia";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";
import { _test_application } from "../../internal/_test_application";
export const test_application_swagger_ObjectGeneric = _test_application("swagger")("ObjectGeneric", typia.application<[
    ObjectGeneric
], "swagger">());
