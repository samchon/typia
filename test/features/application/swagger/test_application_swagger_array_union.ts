import TSON from "../../../../src";
import { ArrayUnion } from "../../../structures/ArrayUnion";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_array_union = _test_application_swagger(
    "union array",
    TSON.application<[ArrayUnion], "swagger">(),
    {
        schemas: [
            {
                type: "array",
                items: {
                    oneOf: [
                        {
                            type: "array",
                            items: {
                                type: "string",
                                nullable: false,
                            },
                            nullable: false,
                        },
                        {
                            type: "array",
                            items: {
                                type: "boolean",
                                nullable: false,
                            },
                            nullable: false,
                        },
                        {
                            type: "array",
                            items: {
                                type: "number",
                                nullable: false,
                            },
                            nullable: false,
                        },
                    ],
                },
                nullable: false,
            },
        ],
        components: {
            schemas: {},
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
