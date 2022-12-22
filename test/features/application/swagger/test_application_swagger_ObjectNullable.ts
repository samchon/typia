import typia from "../../../../src";
import { ObjectNullable } from "../../../structures/ObjectNullable";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectNullable = _test_application(
    "swagger",
)("ObjectNullable", typia.application<[ObjectNullable], "swagger">());
