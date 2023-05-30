import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectUnionImplicit } from "../../../../structures/ObjectUnionImplicit";
export const test_application_ajv_ObjectUnionImplicit = _test_application("ajv")("ObjectUnionImplicit", typia.application<[
    ObjectUnionImplicit
], "ajv">());
