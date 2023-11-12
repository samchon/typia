import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ClassGetter } from "../../../../structures/ClassGetter";

export const test_json_application_ajv_ClassGetter = _test_json_application(
    "ajv",
)("ClassGetter")({
    schemas: [
        {
            $ref: "#/components/schemas/ClassGetter.Person",
        },
    ],
    components: {
        schemas: {
            "ClassGetter.Person": {
                $id: "#/components/schemas/ClassGetter.Person",
                type: "object",
                properties: {
                    id: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    name: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    dead: {
                        oneOf: [
                            {
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "null",
                            },
                            {
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "boolean",
                            },
                        ],
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                },
                required: ["id", "name", "dead"],
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "ajv",
});
