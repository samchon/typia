import typia from "../../../../src";
import { AtomicUnion } from "../../../structures/AtomicUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_AtomicUnion = 
    _test_application("swagger")(
        "AtomicUnion",
        typia.application<[AtomicUnion], "swagger">(),{schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        type: "string",
                        nullable: true
                    },
                    {
                        type: "number",
                        nullable: true
                    },
                    {
                        type: "boolean",
                        nullable: true
                    }
                ]
            },
            nullable: false
        }
    ],
    components: {
        schemas: {}
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);