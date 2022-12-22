import typia from "../../../../src";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectJsonTag = _test_application(
    "swagger",
)("ObjectJsonTag", typia.application<[ObjectJsonTag], "swagger">());
