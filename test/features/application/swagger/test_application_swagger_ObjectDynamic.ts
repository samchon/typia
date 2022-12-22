import typia from "../../../../src";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectDynamic = _test_application(
    "swagger",
)("ObjectDynamic", typia.application<[ObjectDynamic], "swagger">());
