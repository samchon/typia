import typia from "../../../../src";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectUnionImplicit = _test_application(
    "swagger",
)("ObjectUnionImplicit", typia.application<[ObjectUnionImplicit], "swagger">());
