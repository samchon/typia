import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectAlias } from "../../../../structures/ObjectAlias";
export const test_application_swagger_ObjectAlias = _test_application("swagger")("ObjectAlias", typia.application<[
    ObjectAlias
], "swagger">());
