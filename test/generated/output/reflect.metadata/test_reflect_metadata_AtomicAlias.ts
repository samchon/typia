import typia from "../../../../src";
import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_reflect_metadata_AtomicAlias = _test_reflect_metadata(
    "AtomicAlias",
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
                tuples: [
                    {
                        name: "AtomicAlias",
                        tags: [],
                    },
                ],
                objects: [],
                aliases: [],
                natives: [],
                sets: [],
                maps: [],
            },
        ],
        components: {
            objects: [],
            aliases: [],
            arrays: [],
            tuples: [
                {
                    name: "AtomicAlias",
                    index: null,
                    elements: [
                        {
                            any: false,
                            required: true,
                            optional: false,
                            nullable: false,
                            functional: false,
                            atomics: [
                                {
                                    type: "boolean",
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
                        {
                            any: false,
                            required: true,
                            optional: false,
                            nullable: false,
                            functional: false,
                            atomics: [
                                {
                                    type: "number",
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
                        {
                            any: false,
                            required: true,
                            optional: false,
                            nullable: false,
                            functional: false,
                            atomics: [
                                {
                                    type: "string",
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
                    ],
                    recursive: false,
                    nullables: [false],
                },
            ],
        },
    }),
);
