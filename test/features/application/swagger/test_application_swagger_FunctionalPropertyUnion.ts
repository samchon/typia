import typia from "../../../../src";
import { FunctionalPropertyUnion } from "../../../structures/FunctionalPropertyUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_FunctionalPropertyUnion =
    _test_application("swagger")(
        "FunctionalPropertyUnion",
        typia.application<[FunctionalPropertyUnion], "swagger">(),
        {
            schemas: [
                {
                    type: "array",
                    items: {
                        $ref: "#/components/schemas/FunctionalPropertyUnion.IUnion",
                    },
                    nullable: false,
                },
            ],
            components: {
                schemas: {
                    "FunctionalPropertyUnion.IUnion": {
                        type: "object",
                        properties: {
                            name: {
                                type: "string",
                                nullable: false,
                                "x-typia-required": true,
                            },
                            closure: {
                                oneOf: [
                                    {
                                        type: "string",
                                        nullable: true,
                                        "x-typia-required": false,
                                    },
                                    {
                                        type: "number",
                                        nullable: true,
                                        "x-typia-required": false,
                                    },
                                ],
                                "x-typia-required": false,
                            },
                        },
                        nullable: false,
                        required: ["name"],
                        "x-typia_jsDocTags": [],
                    },
                },
            },
            purpose: "swagger",
            prefix: "#/components/schemas",
        },
    );
