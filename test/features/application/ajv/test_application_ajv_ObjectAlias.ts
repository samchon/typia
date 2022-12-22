import typia from "../../../../src";
import { ObjectAlias } from "../../../structures/ObjectAlias";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ObjectAlias = _test_application("ajv")(
    "ObjectAlias",
    typia.application<[ObjectAlias], "ajv">(),
);
