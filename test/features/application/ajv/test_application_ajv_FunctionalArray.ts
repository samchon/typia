import typia from "../../../../src";
import { FunctionalArray } from "../../../structures/FunctionalArray";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_FunctionalArray = _test_application("ajv")(
    "FunctionalArray",
    typia.application<[FunctionalArray], "ajv">(),
    {
        schemas: [
            {
                type: "array",
                items: {},
                nullable: false,
            },
        ],
        components: {
            schemas: {},
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
