import TSON from "../../../../src";
import { AtomicAlias } from "../../../structures/AtomicAlias";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_AtomicAlias = _test_application(
    "swagger",
)("AtomicAlias", TSON.application<[AtomicAlias], "swagger">(), {
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
});
