import TSON from "../../../../src";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_constant_atomic_simple =
    _test_application_ajv(
        "constant atomic",
        TSON.application<[ConstantAtomicSimple], "ajv">(),
        {
            schemas: [
                {
                    type: "array",
                    items: [
                        {
                            type: "boolean",
                            enum: [false],
                            nullable: false,
                        },
                        {
                            type: "boolean",
                            enum: [true],
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
