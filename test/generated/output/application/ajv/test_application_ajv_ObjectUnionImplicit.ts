import typia from "typia";
import { ObjectUnionImplicit } from "../../../../structures/ObjectUnionImplicit";
import { _test_application } from "../../../../internal/_test_application";
export const test_application_ajv_ObjectUnionImplicit = _test_application("ajv")("ObjectUnionImplicit", typia.application<[
    ObjectUnionImplicit
], "ajv">());
