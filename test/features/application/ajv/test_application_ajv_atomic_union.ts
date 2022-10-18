import TSON from "../../../../src";
import { AtomicUnion } from "../../../structures/AtomicUnion";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_atomic_union = _test_application_ajv(
    "union atomic",
    TSON.application<[AtomicUnion], "ajv">(),
    {
        schemas: [
            {
                type: "array",
                items: {
                    oneOf: [
                        {
                            type: "string",
                            nullable: true,
                        },
                        {
                            type: "number",
                            nullable: true,
                        },
                        {
                            type: "boolean",
                            nullable: true,
                        },
                    ],
                },
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
