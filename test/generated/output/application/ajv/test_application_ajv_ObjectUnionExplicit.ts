import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectUnionExplicit } from "../../../../structures/ObjectUnionExplicit";
export const test_application_ajv_ObjectUnionExplicit = _test_application("ajv")("ObjectUnionExplicit", typia.application<[
    ObjectUnionExplicit
], "ajv">());
