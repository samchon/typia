import TSON from "../../../../src";
import { AtomicAlias } from "../../../structures/AtomicAlias";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_atomic_alias = _test_application_swagger(
    "generic alias",
    TSON.application<[AtomicAlias], "swagger">(),
    {
        schemas: [
            {
                type: "array",
                items: {
                    oneOf: [
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
