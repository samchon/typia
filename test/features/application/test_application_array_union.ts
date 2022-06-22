import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_application } from "./_test_application";

export const test_application_array_union = _test_application(
    "union arrray",
    TSON.application<[ArrayUnion]>(),
{schemas: [
        {
            oneOf: [
                {
                    type: "array",
                    items: {
                        type: "string",
                        nullable: false
                    },
                    nullable: false
                },
                {
                    type: "array",
                    items: {
                        "enum": [
                            false,
                            true
                        ],
                        nullable: false
                    },
                    nullable: false
                },
                {
                    type: "array",
                    items: {
                        type: "number",
                        nullable: false
                    },
                    nullable: false
                },
                {
                    type: "array",
                    items: {
                        oneOf: [
                            {
                                "enum": [
                                    false,
                                    true
                                ],
                                nullable: false
                            },
                            {
                                type: "string",
                                nullable: false
                            },
                            {
                                type: "number",
                                nullable: false
                            }
                        ]
                    },
                    nullable: false
                }
            ]
        }
    ],
    components: {
        schemas: {}
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);