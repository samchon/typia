import TSON from "../../../../src";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_array_atomic_simple = _test_application_ajv(
    "atomic array",
    TSON.application<[ArrayAtomicSimple], "ajv">(),
    {
        schemas: [
            {
                type: "array",
                items: [
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
