import typia from "../../../../src";
import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { TypeTagTypeBigInt } from "../../../structures/TypeTagTypeBigInt";

export const test_reflect_metadata_TypeTagTypeBigInt = _test_reflect_metadata(
    "TypeTagTypeBigInt",
)(
    (typia.reflect.metadata as any).from({
        metadatas: [
            {
                any: false,
                required: true,
                optional: false,
                nullable: false,
                functional: false,
                atomics: [],
                constants: [],
                templates: [],
                escaped: null,
                rest: null,
                arrays: [],
                tuples: [],
                objects: ["TypeTagTypeBigInt"],
                aliases: [],
                natives: [],
                sets: [],
                maps: [],
            },
        ],
        components: {
            objects: [
                {
                    name: "TypeTagTypeBigInt",
                    properties: [
                        {
                            key: {
                                any: false,
                                required: true,
                                optional: false,
                                nullable: false,
                                functional: false,
                                atomics: [],
                                constants: [
                                    {
                                        type: "string",
                                        values: ["in64"],
                                    },
                                ],
                                templates: [],
                                escaped: null,
                                rest: null,
                                arrays: [],
                                tuples: [],
                                objects: [],
                                aliases: [],
                                natives: [],
                                sets: [],
                                maps: [],
                            },
                            value: {
                                any: false,
                                required: true,
                                optional: false,
                                nullable: false,
                                functional: false,
                                atomics: [
                                    {
                                        type: "bigint",
                                        tags: [],
                                    },
                                ],
                                constants: [],
                                templates: [],
                                escaped: null,
                                rest: null,
                                arrays: [],
                                tuples: [],
                                objects: [],
                                aliases: [],
                                natives: [],
                                sets: [],
                                maps: [],
                            },
                            description: null,
                            jsDocTags: [],
                        },
                        {
                            key: {
                                any: false,
                                required: true,
                                optional: false,
                                nullable: false,
                                functional: false,
                                atomics: [],
                                constants: [
                                    {
                                        type: "string",
                                        values: ["uint64"],
                                    },
                                ],
                                templates: [],
                                escaped: null,
                                rest: null,
                                arrays: [],
                                tuples: [],
                                objects: [],
                                aliases: [],
                                natives: [],
                                sets: [],
                                maps: [],
                            },
                            value: {
                                any: false,
                                required: true,
                                optional: false,
                                nullable: false,
                                functional: false,
                                atomics: [
                                    {
                                        type: "bigint",
                                        tags: [
                                            [
                                                {
                                                    target: "bigint",
                                                    name: 'Type<"uint64">',
                                                    kind: "type",
                                                    value: "uint64",
                                                    validate:
                                                        "BigInt(0) <= $input",
                                                    exclusive: true,
                                                },
                                            ],
                                        ],
                                    },
                                ],
                                constants: [],
                                templates: [],
                                escaped: null,
                                rest: null,
                                arrays: [],
                                tuples: [],
                                objects: [],
                                aliases: [],
                                natives: [],
                                sets: [],
                                maps: [],
                            },
                            description: null,
                            jsDocTags: [],
                        },
                    ],
                    jsDocTags: [],
                    index: 0,
                    validated: false,
                    recursive: false,
                    nullables: [false],
                },
            ],
            aliases: [],
            arrays: [],
            tuples: [],
        },
    }),
);
