import TSON from "../../../../src";
import { FunctionalPropertyUnion } from "../../../structures/FunctionalPropertyUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_FunctionalPropertyUnion =
    _test_application("swagger")(
        "FunctionalPropertyUnion",
        TSON.application<[FunctionalPropertyUnion], "swagger">(),
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
                                "x-tson-required": true,
                            },
                            closure: {
                                oneOf: [
                                    {
                                        type: "string",
                                        nullable: true,
                                        "x-tson-required": false,
                                    },
                                    {
                                        type: "number",
                                        nullable: true,
                                        "x-tson-required": false,
                                    },
                                ],
                                "x-tson-required": false,
                            },
                        },
                        nullable: false,
                        required: ["name"],
                        "x-tson_jsDocTags": [],
                    },
                },
            },
            purpose: "swagger",
            prefix: "#/components/schemas",
        },
    );
