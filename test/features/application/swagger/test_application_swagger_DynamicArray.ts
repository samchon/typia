import typia from "../../../../src";
import { DynamicArray } from "../../../structures/DynamicArray";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_DynamicArray = _test_application(
    "swagger",
)("DynamicArray", typia.application<[DynamicArray], "swagger">());
