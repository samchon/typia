import typia from "../../../../src";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ConstantAtomicSimple = _test_application(
    "ajv",
)("ConstantAtomicSimple", typia.application<[ConstantAtomicSimple], "ajv">(), {
    schemas: [
        {
            type: "array",
            items: [
                {
                    type: "boolean",
                    enum: [false],
                    nullable: false,
                },
                {
                    type: "boolean",
                    enum: [true],
                    nullable: false,
                },
                {
                    type: "number",
                    enum: [2],
                    nullable: false,
                },
                {
                    type: "string",
                    enum: ["three"],
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
});
