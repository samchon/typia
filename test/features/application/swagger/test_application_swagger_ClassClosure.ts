import typia from "../../../../src";
import { ClassClosure } from "../../../structures/ClassClosure";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ClassClosure = _test_application(
    "swagger",
)("ClassClosure", typia.application<[ClassClosure], "swagger">(), {
    schemas: [
        {
            $ref: "#/components/schemas/ClassClosure.Something",
        },
    ],
    components: {
        schemas: {
            "ClassClosure.Something": {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true,
                    },
                    type: {
                        type: "string",
                        enum: ["something"],
                        nullable: false,
                        "x-typia-required": true,
                    },
                },
                nullable: false,
                required: ["id", "type"],
                "x-typia_jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
