import TSON from "../../../../src";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_array_atomic_simple =
    _test_application_swagger(
        "atomic array",
        TSON.application<[ArrayAtomicSimple], "swagger">(),
        {
            schemas: [
                {
                    type: "array",
                    items: {
                        oneOf: [
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
                            {
                                type: "array",
                                items: {
                                    type: "string",
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
