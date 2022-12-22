import typia from "../../../../src";
import { ObjectPropertyNullable } from "../../../structures/ObjectPropertyNullable";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ObjectPropertyNullable = _test_application(
    "ajv",
)(
    "ObjectPropertyNullable",
    typia.application<[ObjectPropertyNullable], "ajv">(),
);
