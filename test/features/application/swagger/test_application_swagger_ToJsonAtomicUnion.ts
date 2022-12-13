import typia from "../../../../src";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ToJsonAtomicUnion = _test_application(
    "swagger",
)("ToJsonAtomicUnion", typia.application<[ToJsonAtomicUnion], "swagger">(), {
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
});
