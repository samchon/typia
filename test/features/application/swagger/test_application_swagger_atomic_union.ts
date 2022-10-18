import TSON from "../../../../src";
import { AtomicUnion } from "../../../structures/AtomicUnion";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_atomic_union = _test_application_swagger(
    "union atomic",
    TSON.application<[AtomicUnion], "swagger">(),
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
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
