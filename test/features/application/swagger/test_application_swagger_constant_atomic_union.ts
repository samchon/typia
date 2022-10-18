import TSON from "../../../../src";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_constant_atomic_union =
    _test_application_swagger(
        "constant atomic",
        TSON.application<[ConstantAtomicUnion], "swagger">(),
        {
            schemas: [
                {
                    type: "array",
                    items: {
                        oneOf: [
                            {
                                type: "boolean",
                                enum: [false],
                                nullable: false,
                            },
                            {
                                type: "number",
                                enum: [2, 1],
                                nullable: false,
                            },
                            {
                                type: "string",
                                enum: ["three", "four"],
                                nullable: false,
                            },
                            {
                                $ref: "#/components/schemas/__type",
                            },
                        ],
                    },
                    nullable: false,
                },
            ],
            components: {
                schemas: {
                    __type: {
                        type: "object",
                        properties: {
                            key: {
                                type: "string",
                                enum: ["key"],
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["key"],
                        "x-tson_jsDocTags": [],
                    },
                },
            },
            purpose: "swagger",
            prefix: "#/components/schemas",
        },
    );
