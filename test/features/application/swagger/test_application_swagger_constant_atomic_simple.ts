import TSON from "../../../../src";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_constant_atomic_simple =
    _test_application_swagger(
        "constant atomic",
        TSON.application<[ConstantAtomicSimple], "swagger">(),
        {
            schemas: [
                {
                    type: "array",
                    items: {
                        oneOf: [
                            {
                                type: "boolean",
                                enum: [false, true],
                                nullable: false,
                            },
                            {
                                type: "number",
                                enum: [2],
                                nullable: false,
                            },
                            {
                                type: "string",
                                enum: ["three"],
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
