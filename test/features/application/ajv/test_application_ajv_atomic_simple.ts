import TSON from "../../../../src";
import { AtomicSimple } from "../../../structures/AtomicSimple";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_atomic = _test_application_ajv(
    "atomic",
    TSON.application<[AtomicSimple], "ajv">(),
    {
        schemas: [
            {
                type: "array",
                items: [
                    {
                        type: "boolean",
                        nullable: false,
                    },
                    {
                        type: "number",
                        nullable: false,
                    },
                    {
                        type: "string",
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
