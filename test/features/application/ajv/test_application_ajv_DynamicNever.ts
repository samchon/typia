import TSON from "../../../../src";
import { DynamicNever } from "../../../structures/DynamicNever";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_DynamicNever = _test_application("ajv")(
    "DynamicNever",
    TSON.application<[DynamicNever], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/DynamicNever",
            },
        ],
        components: {
            schemas: {
                DynamicNever: {
                    $id: "components#/schemas/DynamicNever",
                    type: "object",
                    properties: {},
                    nullable: false,
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
