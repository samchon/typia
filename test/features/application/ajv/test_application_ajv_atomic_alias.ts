import TSON from "../../../../src";
import { AtomicAlias } from "../../../structures/AtomicAlias";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_atomic_alias = _test_application_ajv(
    "generic alias",
    TSON.application<[AtomicAlias], "ajv">(),
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
