import TSON from "../../../../src";
import { TupleRestObject } from "../../../structures/TupleRestObject";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_TupleRestObject = _test_application(
    "swagger",
)("TupleRestObject", TSON.application<[TupleRestObject], "swagger">(), {
    schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        type: "boolean",
                        nullable: false,
                    },
                    {
                        type: "number",
                        nullable: false,
                    },
                    {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/TupleRestObject.IObject",
                        },
                        nullable: false,
                    },
                ],
            },
            nullable: false,
        },
    ],
    components: {
        schemas: {
            "TupleRestObject.IObject": {
                type: "object",
                properties: {
                    value: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": true,
                    },
                },
                nullable: false,
                required: ["value"],
                "x-tson_jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
