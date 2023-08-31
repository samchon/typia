import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { UltimateUnion } from "../../../structures/UltimateUnion";

export const test_random_UltimateUnion = _test_random(
    "UltimateUnion",
)<UltimateUnion>(UltimateUnion)({
    random: (
        generator?: Partial<typia.IRandomGenerator>,
    ): typia.Resolved<UltimateUnion> => {
        const $generator = (typia.createRandom as any).generator;
        const $pick = (typia.createRandom as any).pick;
        const $ro0 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            schemas: (generator?.array ?? $generator.array)(() =>
                $pick([
                    () => $ro5(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro4(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro1(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro6(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro8(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro7(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro9(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro10(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro11(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro12(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro13(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro15(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro14(_recursive, _recursive ? 1 + _depth : _depth),
                ])(),
            ),
            components: $ro16(_recursive, _recursive ? 1 + _depth : _depth),
            purpose: $pick([() => "swagger", () => "ajv"])(),
        });
        const $ro1 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            enum: (generator?.array ?? $generator.array)(() =>
                (generator?.boolean ?? $generator.boolean)(),
            ),
            default: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            type: "boolean",
            nullable: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            deprecated: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            title: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            description: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            "x-typia-jsDocTags": $pick([
                () => undefined,
                () =>
                    (generator?.array ?? $generator.array)(() =>
                        $ro2(_recursive, _recursive ? 1 + _depth : _depth),
                    ),
            ])(),
            "x-typia-required": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-optional": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-rest": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
        });
        const $ro2 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            name:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            text: $pick([
                () => undefined,
                () =>
                    (generator?.array ?? $generator.array)(() =>
                        $ro3(_recursive, _recursive ? 1 + _depth : _depth),
                    ),
            ])(),
        });
        const $ro3 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            text:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            kind:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
        });
        const $ro4 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            enum: (generator?.array ?? $generator.array)(
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
            ),
            default: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
            ])(),
            type: "number",
            nullable: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            deprecated: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            title: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            description: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            "x-typia-jsDocTags": $pick([
                () => undefined,
                () =>
                    (generator?.array ?? $generator.array)(() =>
                        $ro2(_recursive, _recursive ? 1 + _depth : _depth),
                    ),
            ])(),
            "x-typia-required": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-optional": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-rest": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
        });
        const $ro5 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            enum: (generator?.array ?? $generator.array)(
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ),
            default: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            type: "string",
            nullable: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            deprecated: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            title: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            description: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            "x-typia-jsDocTags": $pick([
                () => undefined,
                () =>
                    (generator?.array ?? $generator.array)(() =>
                        $ro2(_recursive, _recursive ? 1 + _depth : _depth),
                    ),
            ])(),
            "x-typia-required": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-optional": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-rest": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
        });
        const $ro6 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            default: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            type: "boolean",
            nullable: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            deprecated: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            title: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            description: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            "x-typia-jsDocTags": $pick([
                () => undefined,
                () =>
                    (generator?.array ?? $generator.array)(() =>
                        $ro2(_recursive, _recursive ? 1 + _depth : _depth),
                    ),
            ])(),
            "x-typia-required": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-optional": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-rest": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
        });
        const $ro7 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            minimum: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: 'Type<"int32">',
                            kind: "type",
                            value: "int32",
                        },
                    ]) ?? (generator?.integer ?? $generator.integer)(0, 100),
            ])(),
            maximum: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: 'Type<"int32">',
                            kind: "type",
                            value: "int32",
                        },
                    ]) ?? (generator?.integer ?? $generator.integer)(0, 100),
            ])(),
            exclusiveMinimum: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            exclusiveMaximum: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            multipleOf: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: 'Type<"int32">',
                            kind: "type",
                            value: "int32",
                        },
                    ]) ?? (generator?.integer ?? $generator.integer)(0, 100),
            ])(),
            default: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
            ])(),
            type: "integer",
            nullable: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            deprecated: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            title: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            description: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            "x-typia-jsDocTags": $pick([
                () => undefined,
                () =>
                    (generator?.array ?? $generator.array)(() =>
                        $ro2(_recursive, _recursive ? 1 + _depth : _depth),
                    ),
            ])(),
            "x-typia-required": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-optional": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-rest": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
        });
        const $ro8 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            minimum: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
            ])(),
            maximum: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
            ])(),
            exclusiveMinimum: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            exclusiveMaximum: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            multipleOf: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
            ])(),
            default: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
            ])(),
            type: "number",
            nullable: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            deprecated: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            title: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            description: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            "x-typia-jsDocTags": $pick([
                () => undefined,
                () =>
                    (generator?.array ?? $generator.array)(() =>
                        $ro2(_recursive, _recursive ? 1 + _depth : _depth),
                    ),
            ])(),
            "x-typia-required": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-optional": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-rest": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
        });
        const $ro9 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            minLength: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: 'Type<"uint32">',
                            kind: "type",
                            value: "uint32",
                        },
                    ]) ?? (generator?.integer ?? $generator.integer)(0, 10),
            ])(),
            maxLength: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: 'Type<"uint32">',
                            kind: "type",
                            value: "uint32",
                        },
                    ]) ?? (generator?.integer ?? $generator.integer)(0, 10),
            ])(),
            pattern: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            format: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            default: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            type: "string",
            nullable: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            deprecated: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            title: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            description: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            "x-typia-jsDocTags": $pick([
                () => undefined,
                () =>
                    (generator?.array ?? $generator.array)(() =>
                        $ro2(_recursive, _recursive ? 1 + _depth : _depth),
                    ),
            ])(),
            "x-typia-required": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-optional": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-rest": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
        });
        const $ro10 = (
            _recursive: boolean = true,
            _depth: number = 0,
        ): any => ({
            items: $pick([
                () => $ro5(true, _recursive ? 1 + _depth : _depth),
                () => $ro4(true, _recursive ? 1 + _depth : _depth),
                () => $ro1(true, _recursive ? 1 + _depth : _depth),
                () => $ro6(true, _recursive ? 1 + _depth : _depth),
                () => $ro8(true, _recursive ? 1 + _depth : _depth),
                () => $ro7(true, _recursive ? 1 + _depth : _depth),
                () => $ro9(true, _recursive ? 1 + _depth : _depth),
                () => $ro10(true, _recursive ? 1 + _depth : _depth),
                () => $ro11(true, _recursive ? 1 + _depth : _depth),
                () => $ro12(true, _recursive ? 1 + _depth : _depth),
                () => $ro13(true, _recursive ? 1 + _depth : _depth),
                () => $ro15(true, _recursive ? 1 + _depth : _depth),
                () => $ro14(true, _recursive ? 1 + _depth : _depth),
            ])(),
            minItems: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: 'Type<"uint32">',
                            kind: "type",
                            value: "uint32",
                        },
                    ]) ?? (generator?.integer ?? $generator.integer)(0, 10),
            ])(),
            maxItems: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: 'Type<"uint32">',
                            kind: "type",
                            value: "uint32",
                        },
                    ]) ?? (generator?.integer ?? $generator.integer)(0, 10),
            ])(),
            "x-typia-tuple": $pick([
                () => undefined,
                () => $ro11(true, _recursive ? 1 + _depth : _depth),
            ])(),
            type: "array",
            nullable: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            deprecated: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            title: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            description: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            "x-typia-jsDocTags": $pick([
                () => undefined,
                () =>
                    _recursive && 5 < _depth
                        ? []
                        : 5 >= _depth
                        ? (generator?.array ?? $generator.array)(() =>
                              $ro2(true, _recursive ? 1 + _depth : _depth),
                          )
                        : [],
            ])(),
            "x-typia-required": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-optional": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-rest": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
        });
        const $ro11 = (
            _recursive: boolean = true,
            _depth: number = 0,
        ): any => ({
            items:
                _recursive && 5 < _depth
                    ? []
                    : 5 >= _depth
                    ? (generator?.array ?? $generator.array)(() =>
                          $pick([
                              () =>
                                  $ro5(true, _recursive ? 1 + _depth : _depth),
                              () =>
                                  $ro4(true, _recursive ? 1 + _depth : _depth),
                              () =>
                                  $ro1(true, _recursive ? 1 + _depth : _depth),
                              () =>
                                  $ro6(true, _recursive ? 1 + _depth : _depth),
                              () =>
                                  $ro8(true, _recursive ? 1 + _depth : _depth),
                              () =>
                                  $ro7(true, _recursive ? 1 + _depth : _depth),
                              () =>
                                  $ro9(true, _recursive ? 1 + _depth : _depth),
                              () =>
                                  $ro10(true, _recursive ? 1 + _depth : _depth),
                              () =>
                                  $ro11(true, _recursive ? 1 + _depth : _depth),
                              () =>
                                  $ro12(true, _recursive ? 1 + _depth : _depth),
                              () =>
                                  $ro13(true, _recursive ? 1 + _depth : _depth),
                              () =>
                                  $ro15(true, _recursive ? 1 + _depth : _depth),
                              () =>
                                  $ro14(true, _recursive ? 1 + _depth : _depth),
                          ])(),
                      )
                    : [],
            minItems:
                (generator?.customs ?? $generator.customs)?.number?.([
                    {
                        name: 'Type<"uint32">',
                        kind: "type",
                        value: "uint32",
                    },
                ]) ?? (generator?.integer ?? $generator.integer)(0, 10),
            maxItems: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: 'Type<"uint32">',
                            kind: "type",
                            value: "uint32",
                        },
                    ]) ?? (generator?.integer ?? $generator.integer)(0, 10),
            ])(),
            type: "array",
            nullable: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            deprecated: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            title: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            description: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            "x-typia-jsDocTags": $pick([
                () => undefined,
                () =>
                    _recursive && 5 < _depth
                        ? []
                        : 5 >= _depth
                        ? (generator?.array ?? $generator.array)(() =>
                              $ro2(true, _recursive ? 1 + _depth : _depth),
                          )
                        : [],
            ])(),
            "x-typia-required": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-optional": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-rest": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
        });
        const $ro12 = (
            _recursive: boolean = true,
            _depth: number = 0,
        ): any => ({
            oneOf:
                _recursive && 5 < _depth
                    ? []
                    : 5 >= _depth
                    ? (generator?.array ?? $generator.array)(() =>
                          $pick([
                              () =>
                                  $ro5(true, _recursive ? 1 + _depth : _depth),
                              () =>
                                  $ro4(true, _recursive ? 1 + _depth : _depth),
                              () =>
                                  $ro1(true, _recursive ? 1 + _depth : _depth),
                              () =>
                                  $ro6(true, _recursive ? 1 + _depth : _depth),
                              () =>
                                  $ro8(true, _recursive ? 1 + _depth : _depth),
                              () =>
                                  $ro7(true, _recursive ? 1 + _depth : _depth),
                              () =>
                                  $ro9(true, _recursive ? 1 + _depth : _depth),
                              () =>
                                  $ro10(true, _recursive ? 1 + _depth : _depth),
                              () =>
                                  $ro11(true, _recursive ? 1 + _depth : _depth),
                              () =>
                                  $ro12(true, _recursive ? 1 + _depth : _depth),
                              () =>
                                  $ro13(true, _recursive ? 1 + _depth : _depth),
                              () =>
                                  $ro15(true, _recursive ? 1 + _depth : _depth),
                              () =>
                                  $ro14(true, _recursive ? 1 + _depth : _depth),
                          ])(),
                      )
                    : [],
            deprecated: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            title: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            description: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            "x-typia-jsDocTags": $pick([
                () => undefined,
                () =>
                    _recursive && 5 < _depth
                        ? []
                        : 5 >= _depth
                        ? (generator?.array ?? $generator.array)(() =>
                              $ro2(true, _recursive ? 1 + _depth : _depth),
                          )
                        : [],
            ])(),
            "x-typia-required": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-optional": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-rest": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
        });
        const $ro13 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            $ref:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            deprecated: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            title: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            description: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            "x-typia-jsDocTags": $pick([
                () => undefined,
                () =>
                    (generator?.array ?? $generator.array)(() =>
                        $ro2(_recursive, _recursive ? 1 + _depth : _depth),
                    ),
            ])(),
            "x-typia-required": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-optional": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-rest": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
        });
        const $ro14 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            type: "null",
            deprecated: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            title: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            description: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            "x-typia-jsDocTags": $pick([
                () => undefined,
                () =>
                    (generator?.array ?? $generator.array)(() =>
                        $ro2(_recursive, _recursive ? 1 + _depth : _depth),
                    ),
            ])(),
            "x-typia-required": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-optional": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-rest": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
        });
        const $ro15 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            type: undefined,
            deprecated: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            title: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            description: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            "x-typia-jsDocTags": $pick([
                () => undefined,
                () =>
                    (generator?.array ?? $generator.array)(() =>
                        $ro2(_recursive, _recursive ? 1 + _depth : _depth),
                    ),
            ])(),
            "x-typia-required": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-optional": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-rest": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
        });
        const $ro16 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            schemas: $pick([
                () => undefined,
                () => $ro17(_recursive, _recursive ? 1 + _depth : _depth),
            ])(),
        });
        const $ro17 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => {
            const output = {} as any;
            (generator?.array ?? $generator.array)(
                () =>
                    (output[
                        (generator?.customs ?? $generator.customs)?.string?.(
                            [],
                        ) ?? (generator?.string ?? $generator.string)()
                    ] = $pick([
                        () =>
                            $ro18(_recursive, _recursive ? 1 + _depth : _depth),
                        () =>
                            $ro22(_recursive, _recursive ? 1 + _depth : _depth),
                        () =>
                            $ro21(_recursive, _recursive ? 1 + _depth : _depth),
                        () =>
                            $ro20(_recursive, _recursive ? 1 + _depth : _depth),
                        () =>
                            $ro23(_recursive, _recursive ? 1 + _depth : _depth),
                        () =>
                            $ro25(_recursive, _recursive ? 1 + _depth : _depth),
                        () =>
                            $ro24(_recursive, _recursive ? 1 + _depth : _depth),
                        () =>
                            $ro26(_recursive, _recursive ? 1 + _depth : _depth),
                        () =>
                            $ro27(_recursive, _recursive ? 1 + _depth : _depth),
                        () =>
                            $ro28(_recursive, _recursive ? 1 + _depth : _depth),
                        () =>
                            $ro29(_recursive, _recursive ? 1 + _depth : _depth),
                        () =>
                            $ro30(_recursive, _recursive ? 1 + _depth : _depth),
                        () =>
                            $ro32(_recursive, _recursive ? 1 + _depth : _depth),
                        () =>
                            $ro31(_recursive, _recursive ? 1 + _depth : _depth),
                    ])()),
                (generator?.integer ?? $generator.integer)(0, 3),
            );
            return output;
        };
        const $ro18 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            $id: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            type: "object",
            nullable: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            properties: $ro19(_recursive, _recursive ? 1 + _depth : _depth),
            patternProperties: $pick([
                () => undefined,
                () => $ro19(_recursive, _recursive ? 1 + _depth : _depth),
            ])(),
            additionalProperties: $pick([
                () => undefined,
                () => $ro5(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro4(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro1(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro6(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro8(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro7(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro9(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro10(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro11(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro12(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro13(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro15(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro14(_recursive, _recursive ? 1 + _depth : _depth),
            ])(),
            required: $pick([
                () => undefined,
                () =>
                    (generator?.array ?? $generator.array)(
                        () =>
                            (
                                generator?.customs ?? $generator.customs
                            )?.string?.([]) ??
                            (generator?.string ?? $generator.string)(),
                    ),
            ])(),
            description: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            "x-typia-jsDocTags": $pick([
                () => undefined,
                () =>
                    (generator?.array ?? $generator.array)(() =>
                        $ro2(_recursive, _recursive ? 1 + _depth : _depth),
                    ),
            ])(),
            "x-typia-patternProperties": $pick([
                () => undefined,
                () => $ro19(_recursive, _recursive ? 1 + _depth : _depth),
            ])(),
            "x-typia-additionalProperties": $pick([
                () => undefined,
                () => $ro5(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro4(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro1(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro6(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro8(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro7(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro9(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro10(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro11(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro12(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro13(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro15(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro14(_recursive, _recursive ? 1 + _depth : _depth),
            ])(),
        });
        const $ro19 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => {
            const output = {} as any;
            (generator?.array ?? $generator.array)(
                () =>
                    (output[
                        (generator?.customs ?? $generator.customs)?.string?.(
                            [],
                        ) ?? (generator?.string ?? $generator.string)()
                    ] = $pick([
                        () =>
                            $ro5(_recursive, _recursive ? 1 + _depth : _depth),
                        () =>
                            $ro4(_recursive, _recursive ? 1 + _depth : _depth),
                        () =>
                            $ro1(_recursive, _recursive ? 1 + _depth : _depth),
                        () =>
                            $ro6(_recursive, _recursive ? 1 + _depth : _depth),
                        () =>
                            $ro8(_recursive, _recursive ? 1 + _depth : _depth),
                        () =>
                            $ro7(_recursive, _recursive ? 1 + _depth : _depth),
                        () =>
                            $ro9(_recursive, _recursive ? 1 + _depth : _depth),
                        () =>
                            $ro10(_recursive, _recursive ? 1 + _depth : _depth),
                        () =>
                            $ro11(_recursive, _recursive ? 1 + _depth : _depth),
                        () =>
                            $ro12(_recursive, _recursive ? 1 + _depth : _depth),
                        () =>
                            $ro13(_recursive, _recursive ? 1 + _depth : _depth),
                        () =>
                            $ro15(_recursive, _recursive ? 1 + _depth : _depth),
                        () =>
                            $ro14(_recursive, _recursive ? 1 + _depth : _depth),
                    ])()),
                (generator?.integer ?? $generator.integer)(0, 3),
            );
            return output;
        };
        const $ro20 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            enum: (generator?.array ?? $generator.array)(() =>
                (generator?.boolean ?? $generator.boolean)(),
            ),
            default: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            type: "boolean",
            nullable: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            deprecated: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            title: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            description: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            "x-typia-jsDocTags": $pick([
                () => undefined,
                () =>
                    (generator?.array ?? $generator.array)(() =>
                        $ro2(_recursive, _recursive ? 1 + _depth : _depth),
                    ),
            ])(),
            "x-typia-required": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-optional": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-rest": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            $id: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            $recursiveAnchor: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
        });
        const $ro21 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            enum: (generator?.array ?? $generator.array)(
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
            ),
            default: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
            ])(),
            type: "number",
            nullable: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            deprecated: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            title: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            description: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            "x-typia-jsDocTags": $pick([
                () => undefined,
                () =>
                    (generator?.array ?? $generator.array)(() =>
                        $ro2(_recursive, _recursive ? 1 + _depth : _depth),
                    ),
            ])(),
            "x-typia-required": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-optional": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-rest": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            $id: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            $recursiveAnchor: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
        });
        const $ro22 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            enum: (generator?.array ?? $generator.array)(
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ),
            default: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            type: "string",
            nullable: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            deprecated: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            title: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            description: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            "x-typia-jsDocTags": $pick([
                () => undefined,
                () =>
                    (generator?.array ?? $generator.array)(() =>
                        $ro2(_recursive, _recursive ? 1 + _depth : _depth),
                    ),
            ])(),
            "x-typia-required": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-optional": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-rest": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            $id: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            $recursiveAnchor: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
        });
        const $ro23 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            default: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            type: "boolean",
            nullable: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            deprecated: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            title: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            description: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            "x-typia-jsDocTags": $pick([
                () => undefined,
                () =>
                    (generator?.array ?? $generator.array)(() =>
                        $ro2(_recursive, _recursive ? 1 + _depth : _depth),
                    ),
            ])(),
            "x-typia-required": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-optional": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-rest": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            $id: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            $recursiveAnchor: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
        });
        const $ro24 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            minimum: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: 'Type<"int32">',
                            kind: "type",
                            value: "int32",
                        },
                    ]) ?? (generator?.integer ?? $generator.integer)(0, 100),
            ])(),
            maximum: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: 'Type<"int32">',
                            kind: "type",
                            value: "int32",
                        },
                    ]) ?? (generator?.integer ?? $generator.integer)(0, 100),
            ])(),
            exclusiveMinimum: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            exclusiveMaximum: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            multipleOf: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: 'Type<"int32">',
                            kind: "type",
                            value: "int32",
                        },
                    ]) ?? (generator?.integer ?? $generator.integer)(0, 100),
            ])(),
            default: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
            ])(),
            type: "integer",
            nullable: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            deprecated: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            title: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            description: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            "x-typia-jsDocTags": $pick([
                () => undefined,
                () =>
                    (generator?.array ?? $generator.array)(() =>
                        $ro2(_recursive, _recursive ? 1 + _depth : _depth),
                    ),
            ])(),
            "x-typia-required": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-optional": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-rest": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            $id: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            $recursiveAnchor: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
        });
        const $ro25 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            minimum: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
            ])(),
            maximum: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
            ])(),
            exclusiveMinimum: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            exclusiveMaximum: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            multipleOf: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
            ])(),
            default: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
            ])(),
            type: "number",
            nullable: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            deprecated: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            title: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            description: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            "x-typia-jsDocTags": $pick([
                () => undefined,
                () =>
                    (generator?.array ?? $generator.array)(() =>
                        $ro2(_recursive, _recursive ? 1 + _depth : _depth),
                    ),
            ])(),
            "x-typia-required": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-optional": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-rest": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            $id: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            $recursiveAnchor: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
        });
        const $ro26 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            minLength: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: 'Type<"uint32">',
                            kind: "type",
                            value: "uint32",
                        },
                    ]) ?? (generator?.integer ?? $generator.integer)(0, 10),
            ])(),
            maxLength: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: 'Type<"uint32">',
                            kind: "type",
                            value: "uint32",
                        },
                    ]) ?? (generator?.integer ?? $generator.integer)(0, 10),
            ])(),
            pattern: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            format: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            default: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            type: "string",
            nullable: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            deprecated: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            title: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            description: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            "x-typia-jsDocTags": $pick([
                () => undefined,
                () =>
                    (generator?.array ?? $generator.array)(() =>
                        $ro2(_recursive, _recursive ? 1 + _depth : _depth),
                    ),
            ])(),
            "x-typia-required": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-optional": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-rest": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            $id: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            $recursiveAnchor: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
        });
        const $ro27 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            items: $pick([
                () => $ro5(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro4(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro1(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro6(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro8(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro7(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro9(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro10(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro11(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro12(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro13(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro15(_recursive, _recursive ? 1 + _depth : _depth),
                () => $ro14(_recursive, _recursive ? 1 + _depth : _depth),
            ])(),
            minItems: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: 'Type<"uint32">',
                            kind: "type",
                            value: "uint32",
                        },
                    ]) ?? (generator?.integer ?? $generator.integer)(0, 10),
            ])(),
            maxItems: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: 'Type<"uint32">',
                            kind: "type",
                            value: "uint32",
                        },
                    ]) ?? (generator?.integer ?? $generator.integer)(0, 10),
            ])(),
            "x-typia-tuple": $pick([
                () => undefined,
                () => $ro11(_recursive, _recursive ? 1 + _depth : _depth),
            ])(),
            type: "array",
            nullable: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            deprecated: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            title: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            description: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            "x-typia-jsDocTags": $pick([
                () => undefined,
                () =>
                    (generator?.array ?? $generator.array)(() =>
                        $ro2(_recursive, _recursive ? 1 + _depth : _depth),
                    ),
            ])(),
            "x-typia-required": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-optional": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-rest": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            $id: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            $recursiveAnchor: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
        });
        const $ro28 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            items: (generator?.array ?? $generator.array)(() =>
                $pick([
                    () => $ro5(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro4(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro1(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro6(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro8(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro7(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro9(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro10(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro11(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro12(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro13(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro15(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro14(_recursive, _recursive ? 1 + _depth : _depth),
                ])(),
            ),
            minItems:
                (generator?.customs ?? $generator.customs)?.number?.([
                    {
                        name: 'Type<"uint32">',
                        kind: "type",
                        value: "uint32",
                    },
                ]) ?? (generator?.integer ?? $generator.integer)(0, 10),
            maxItems: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: 'Type<"uint32">',
                            kind: "type",
                            value: "uint32",
                        },
                    ]) ?? (generator?.integer ?? $generator.integer)(0, 10),
            ])(),
            type: "array",
            nullable: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            deprecated: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            title: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            description: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            "x-typia-jsDocTags": $pick([
                () => undefined,
                () =>
                    (generator?.array ?? $generator.array)(() =>
                        $ro2(_recursive, _recursive ? 1 + _depth : _depth),
                    ),
            ])(),
            "x-typia-required": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-optional": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-rest": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            $id: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            $recursiveAnchor: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
        });
        const $ro29 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            oneOf: (generator?.array ?? $generator.array)(() =>
                $pick([
                    () => $ro5(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro4(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro1(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro6(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro8(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro7(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro9(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro10(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro11(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro12(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro13(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro15(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro14(_recursive, _recursive ? 1 + _depth : _depth),
                ])(),
            ),
            deprecated: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            title: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            description: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            "x-typia-jsDocTags": $pick([
                () => undefined,
                () =>
                    (generator?.array ?? $generator.array)(() =>
                        $ro2(_recursive, _recursive ? 1 + _depth : _depth),
                    ),
            ])(),
            "x-typia-required": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-optional": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-rest": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            $id: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            $recursiveAnchor: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
        });
        const $ro30 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            $ref:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            deprecated: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            title: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            description: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            "x-typia-jsDocTags": $pick([
                () => undefined,
                () =>
                    (generator?.array ?? $generator.array)(() =>
                        $ro2(_recursive, _recursive ? 1 + _depth : _depth),
                    ),
            ])(),
            "x-typia-required": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-optional": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-rest": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            $id: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            $recursiveAnchor: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
        });
        const $ro31 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            type: "null",
            deprecated: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            title: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            description: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            "x-typia-jsDocTags": $pick([
                () => undefined,
                () =>
                    (generator?.array ?? $generator.array)(() =>
                        $ro2(_recursive, _recursive ? 1 + _depth : _depth),
                    ),
            ])(),
            "x-typia-required": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-optional": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-rest": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            $id: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            $recursiveAnchor: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
        });
        const $ro32 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            type: undefined,
            deprecated: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            title: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            description: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            "x-typia-jsDocTags": $pick([
                () => undefined,
                () =>
                    (generator?.array ?? $generator.array)(() =>
                        $ro2(_recursive, _recursive ? 1 + _depth : _depth),
                    ),
            ])(),
            "x-typia-required": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-optional": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            "x-typia-rest": $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            $id: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            $recursiveAnchor: $pick([
                () => undefined,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
        });
        return (generator?.array ?? $generator.array)(() => $ro0());
    },
    assert: (input: any): UltimateUnion => {
        const __is = (input: any): input is UltimateUnion => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.schemas) &&
                input.schemas.every(
                    (elem: any) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        false === Array.isArray(elem) &&
                        $iu0(elem),
                ) &&
                "object" === typeof input.components &&
                null !== input.components &&
                false === Array.isArray(input.components) &&
                $io16(input.components) &&
                ("swagger" === input.purpose || "ajv" === input.purpose);
            const $io1 = (input: any): boolean =>
                Array.isArray(input["enum"]) &&
                input["enum"].every((elem: any) => "boolean" === typeof elem) &&
                (undefined === input["default"] ||
                    "boolean" === typeof input["default"]) &&
                "boolean" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io2 = (input: any): boolean =>
                "string" === typeof input.name &&
                (undefined === input.text ||
                    (Array.isArray(input.text) &&
                        input.text.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io3(elem),
                        )));
            const $io3 = (input: any): boolean =>
                "string" === typeof input.text &&
                "string" === typeof input.kind;
            const $io4 = (input: any): boolean =>
                Array.isArray(input["enum"]) &&
                input["enum"].every(
                    (elem: any) =>
                        "number" === typeof elem && Number.isFinite(elem),
                ) &&
                (undefined === input["default"] ||
                    ("number" === typeof input["default"] &&
                        Number.isFinite(input["default"]))) &&
                "number" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io5 = (input: any): boolean =>
                Array.isArray(input["enum"]) &&
                input["enum"].every((elem: any) => "string" === typeof elem) &&
                (undefined === input["default"] ||
                    "string" === typeof input["default"]) &&
                "string" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io6 = (input: any): boolean =>
                (undefined === input["default"] ||
                    "boolean" === typeof input["default"]) &&
                "boolean" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io7 = (input: any): boolean =>
                (undefined === input.minimum ||
                    ("number" === typeof input.minimum &&
                        Math.floor(input.minimum) === input.minimum &&
                        -2147483648 <= input.minimum &&
                        input.minimum <= 2147483647)) &&
                (undefined === input.maximum ||
                    ("number" === typeof input.maximum &&
                        Math.floor(input.maximum) === input.maximum &&
                        -2147483648 <= input.maximum &&
                        input.maximum <= 2147483647)) &&
                (undefined === input.exclusiveMinimum ||
                    "boolean" === typeof input.exclusiveMinimum) &&
                (undefined === input.exclusiveMaximum ||
                    "boolean" === typeof input.exclusiveMaximum) &&
                (undefined === input.multipleOf ||
                    ("number" === typeof input.multipleOf &&
                        Math.floor(input.multipleOf) === input.multipleOf &&
                        -2147483648 <= input.multipleOf &&
                        input.multipleOf <= 2147483647)) &&
                (undefined === input["default"] ||
                    ("number" === typeof input["default"] &&
                        Number.isFinite(input["default"]))) &&
                "integer" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io8 = (input: any): boolean =>
                (undefined === input.minimum ||
                    ("number" === typeof input.minimum &&
                        Number.isFinite(input.minimum))) &&
                (undefined === input.maximum ||
                    ("number" === typeof input.maximum &&
                        Number.isFinite(input.maximum))) &&
                (undefined === input.exclusiveMinimum ||
                    "boolean" === typeof input.exclusiveMinimum) &&
                (undefined === input.exclusiveMaximum ||
                    "boolean" === typeof input.exclusiveMaximum) &&
                (undefined === input.multipleOf ||
                    ("number" === typeof input.multipleOf &&
                        Number.isFinite(input.multipleOf))) &&
                (undefined === input["default"] ||
                    ("number" === typeof input["default"] &&
                        Number.isFinite(input["default"]))) &&
                "number" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io9 = (input: any): boolean =>
                (undefined === input.minLength ||
                    ("number" === typeof input.minLength &&
                        Math.floor(input.minLength) === input.minLength &&
                        0 <= input.minLength &&
                        input.minLength <= 4294967295)) &&
                (undefined === input.maxLength ||
                    ("number" === typeof input.maxLength &&
                        Math.floor(input.maxLength) === input.maxLength &&
                        0 <= input.maxLength &&
                        input.maxLength <= 4294967295)) &&
                (undefined === input.pattern ||
                    "string" === typeof input.pattern) &&
                (undefined === input.format ||
                    "string" === typeof input.format) &&
                (undefined === input["default"] ||
                    "string" === typeof input["default"]) &&
                "string" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io10 = (input: any): boolean =>
                "object" === typeof input.items &&
                null !== input.items &&
                false === Array.isArray(input.items) &&
                $iu0(input.items) &&
                (undefined === input.minItems ||
                    ("number" === typeof input.minItems &&
                        Math.floor(input.minItems) === input.minItems &&
                        0 <= input.minItems &&
                        input.minItems <= 4294967295)) &&
                (undefined === input.maxItems ||
                    ("number" === typeof input.maxItems &&
                        Math.floor(input.maxItems) === input.maxItems &&
                        0 <= input.maxItems &&
                        input.maxItems <= 4294967295)) &&
                (undefined === input["x-typia-tuple"] ||
                    ("object" === typeof input["x-typia-tuple"] &&
                        null !== input["x-typia-tuple"] &&
                        $io11(input["x-typia-tuple"]))) &&
                "array" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io11 = (input: any): boolean =>
                Array.isArray(input.items) &&
                input.items.every(
                    (elem: any) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        false === Array.isArray(elem) &&
                        $iu0(elem),
                ) &&
                "number" === typeof input.minItems &&
                Math.floor(input.minItems) === input.minItems &&
                0 <= input.minItems &&
                input.minItems <= 4294967295 &&
                (undefined === input.maxItems ||
                    ("number" === typeof input.maxItems &&
                        Math.floor(input.maxItems) === input.maxItems &&
                        0 <= input.maxItems &&
                        input.maxItems <= 4294967295)) &&
                "array" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io12 = (input: any): boolean =>
                Array.isArray(input.oneOf) &&
                input.oneOf.every(
                    (elem: any) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        false === Array.isArray(elem) &&
                        $iu0(elem),
                ) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io13 = (input: any): boolean =>
                "string" === typeof input.$ref &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io14 = (input: any): boolean =>
                "null" === input.type &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io15 = (input: any): boolean =>
                null !== input.type &&
                undefined === input.type &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io16 = (input: any): boolean =>
                undefined === input.schemas ||
                ("object" === typeof input.schemas &&
                    null !== input.schemas &&
                    false === Array.isArray(input.schemas) &&
                    $io17(input.schemas));
            const $io17 = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            "object" === typeof value &&
                            null !== value &&
                            false === Array.isArray(value) &&
                            $iu1(value)
                        );
                    return true;
                });
            const $io18 = (input: any): boolean =>
                (undefined === input.$id || "string" === typeof input.$id) &&
                "object" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                "object" === typeof input.properties &&
                null !== input.properties &&
                false === Array.isArray(input.properties) &&
                $io19(input.properties) &&
                (undefined === input.patternProperties ||
                    ("object" === typeof input.patternProperties &&
                        null !== input.patternProperties &&
                        false === Array.isArray(input.patternProperties) &&
                        $io19(input.patternProperties))) &&
                (undefined === input.additionalProperties ||
                    ("object" === typeof input.additionalProperties &&
                        null !== input.additionalProperties &&
                        false === Array.isArray(input.additionalProperties) &&
                        $iu0(input.additionalProperties))) &&
                (undefined === input.required ||
                    (Array.isArray(input.required) &&
                        input.required.every(
                            (elem: any) => "string" === typeof elem,
                        ))) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-patternProperties"] ||
                    ("object" === typeof input["x-typia-patternProperties"] &&
                        null !== input["x-typia-patternProperties"] &&
                        false ===
                            Array.isArray(input["x-typia-patternProperties"]) &&
                        $io19(input["x-typia-patternProperties"]))) &&
                (undefined === input["x-typia-additionalProperties"] ||
                    ("object" ===
                        typeof input["x-typia-additionalProperties"] &&
                        null !== input["x-typia-additionalProperties"] &&
                        false ===
                            Array.isArray(
                                input["x-typia-additionalProperties"],
                            ) &&
                        $iu0(input["x-typia-additionalProperties"])));
            const $io19 = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            "object" === typeof value &&
                            null !== value &&
                            false === Array.isArray(value) &&
                            $iu0(value)
                        );
                    return true;
                });
            const $io20 = (input: any): boolean =>
                Array.isArray(input["enum"]) &&
                input["enum"].every((elem: any) => "boolean" === typeof elem) &&
                (undefined === input["default"] ||
                    "boolean" === typeof input["default"]) &&
                "boolean" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io21 = (input: any): boolean =>
                Array.isArray(input["enum"]) &&
                input["enum"].every(
                    (elem: any) =>
                        "number" === typeof elem && Number.isFinite(elem),
                ) &&
                (undefined === input["default"] ||
                    ("number" === typeof input["default"] &&
                        Number.isFinite(input["default"]))) &&
                "number" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io22 = (input: any): boolean =>
                Array.isArray(input["enum"]) &&
                input["enum"].every((elem: any) => "string" === typeof elem) &&
                (undefined === input["default"] ||
                    "string" === typeof input["default"]) &&
                "string" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io23 = (input: any): boolean =>
                (undefined === input["default"] ||
                    "boolean" === typeof input["default"]) &&
                "boolean" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io24 = (input: any): boolean =>
                (undefined === input.minimum ||
                    ("number" === typeof input.minimum &&
                        Math.floor(input.minimum) === input.minimum &&
                        -2147483648 <= input.minimum &&
                        input.minimum <= 2147483647)) &&
                (undefined === input.maximum ||
                    ("number" === typeof input.maximum &&
                        Math.floor(input.maximum) === input.maximum &&
                        -2147483648 <= input.maximum &&
                        input.maximum <= 2147483647)) &&
                (undefined === input.exclusiveMinimum ||
                    "boolean" === typeof input.exclusiveMinimum) &&
                (undefined === input.exclusiveMaximum ||
                    "boolean" === typeof input.exclusiveMaximum) &&
                (undefined === input.multipleOf ||
                    ("number" === typeof input.multipleOf &&
                        Math.floor(input.multipleOf) === input.multipleOf &&
                        -2147483648 <= input.multipleOf &&
                        input.multipleOf <= 2147483647)) &&
                (undefined === input["default"] ||
                    ("number" === typeof input["default"] &&
                        Number.isFinite(input["default"]))) &&
                "integer" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io25 = (input: any): boolean =>
                (undefined === input.minimum ||
                    ("number" === typeof input.minimum &&
                        Number.isFinite(input.minimum))) &&
                (undefined === input.maximum ||
                    ("number" === typeof input.maximum &&
                        Number.isFinite(input.maximum))) &&
                (undefined === input.exclusiveMinimum ||
                    "boolean" === typeof input.exclusiveMinimum) &&
                (undefined === input.exclusiveMaximum ||
                    "boolean" === typeof input.exclusiveMaximum) &&
                (undefined === input.multipleOf ||
                    ("number" === typeof input.multipleOf &&
                        Number.isFinite(input.multipleOf))) &&
                (undefined === input["default"] ||
                    ("number" === typeof input["default"] &&
                        Number.isFinite(input["default"]))) &&
                "number" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io26 = (input: any): boolean =>
                (undefined === input.minLength ||
                    ("number" === typeof input.minLength &&
                        Math.floor(input.minLength) === input.minLength &&
                        0 <= input.minLength &&
                        input.minLength <= 4294967295)) &&
                (undefined === input.maxLength ||
                    ("number" === typeof input.maxLength &&
                        Math.floor(input.maxLength) === input.maxLength &&
                        0 <= input.maxLength &&
                        input.maxLength <= 4294967295)) &&
                (undefined === input.pattern ||
                    "string" === typeof input.pattern) &&
                (undefined === input.format ||
                    "string" === typeof input.format) &&
                (undefined === input["default"] ||
                    "string" === typeof input["default"]) &&
                "string" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io27 = (input: any): boolean =>
                "object" === typeof input.items &&
                null !== input.items &&
                false === Array.isArray(input.items) &&
                $iu0(input.items) &&
                (undefined === input.minItems ||
                    ("number" === typeof input.minItems &&
                        Math.floor(input.minItems) === input.minItems &&
                        0 <= input.minItems &&
                        input.minItems <= 4294967295)) &&
                (undefined === input.maxItems ||
                    ("number" === typeof input.maxItems &&
                        Math.floor(input.maxItems) === input.maxItems &&
                        0 <= input.maxItems &&
                        input.maxItems <= 4294967295)) &&
                (undefined === input["x-typia-tuple"] ||
                    ("object" === typeof input["x-typia-tuple"] &&
                        null !== input["x-typia-tuple"] &&
                        $io11(input["x-typia-tuple"]))) &&
                "array" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io28 = (input: any): boolean =>
                Array.isArray(input.items) &&
                input.items.every(
                    (elem: any) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        false === Array.isArray(elem) &&
                        $iu0(elem),
                ) &&
                "number" === typeof input.minItems &&
                Math.floor(input.minItems) === input.minItems &&
                0 <= input.minItems &&
                input.minItems <= 4294967295 &&
                (undefined === input.maxItems ||
                    ("number" === typeof input.maxItems &&
                        Math.floor(input.maxItems) === input.maxItems &&
                        0 <= input.maxItems &&
                        input.maxItems <= 4294967295)) &&
                "array" === input.type &&
                (undefined === input.nullable ||
                    "boolean" === typeof input.nullable) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io29 = (input: any): boolean =>
                Array.isArray(input.oneOf) &&
                input.oneOf.every(
                    (elem: any) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        false === Array.isArray(elem) &&
                        $iu0(elem),
                ) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io30 = (input: any): boolean =>
                "string" === typeof input.$ref &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io31 = (input: any): boolean =>
                "null" === input.type &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $io32 = (input: any): boolean =>
                null !== input.type &&
                undefined === input.type &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-optional"] ||
                    "boolean" === typeof input["x-typia-optional"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]) &&
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor);
            const $iu0 = (input: any): any =>
                (() => {
                    if ("integer" === input.type) return $io7(input);
                    else if (
                        "object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items) &&
                        $iu0(input.items)
                    )
                        return $io10(input);
                    else if (
                        Array.isArray(input.items) &&
                        input.items.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem) &&
                                $iu0(elem),
                        )
                    )
                        return $io11(input);
                    else if (undefined !== input.oneOf) return $io12(input);
                    else if (undefined !== input.$ref) return $io13(input);
                    else if ("null" === input.type) return $io14(input);
                    else
                        return (() => {
                            if ($io5(input)) return $io5(input);
                            else if ($io4(input)) return $io4(input);
                            else if ($io1(input)) return $io1(input);
                            else if ($io6(input)) return $io6(input);
                            else if ($io8(input)) return $io8(input);
                            else if ($io9(input)) return $io9(input);
                            else if ($io15(input)) return $io15(input);
                            else return false;
                        })();
                })();
            const $iu1 = (input: any): any =>
                (() => {
                    if ("object" === input.type) return $io18(input);
                    else if ("integer" === input.type) return $io24(input);
                    else if (
                        "object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items) &&
                        $iu0(input.items)
                    )
                        return $io27(input);
                    else if (
                        Array.isArray(input.items) &&
                        input.items.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem) &&
                                $iu0(elem),
                        )
                    )
                        return $io28(input);
                    else if (undefined !== input.oneOf) return $io29(input);
                    else if (undefined !== input.$ref) return $io30(input);
                    else if ("null" === input.type) return $io31(input);
                    else
                        return (() => {
                            if ($io22(input)) return $io22(input);
                            else if ($io21(input)) return $io21(input);
                            else if ($io20(input)) return $io20(input);
                            else if ($io23(input)) return $io23(input);
                            else if ($io25(input)) return $io25(input);
                            else if ($io26(input)) return $io26(input);
                            else if ($io32(input)) return $io32(input);
                            else return false;
                        })();
                })();
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is UltimateUnion => {
                const $guard = (typia.createAssert as any).guard;
                const $join = (typia.createAssert as any).join;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((Array.isArray(input.schemas) ||
                        $guard(_exceptionable, {
                            path: _path + ".schemas",
                            expected: "Array<IJsonSchema>",
                            value: input.schemas,
                        })) &&
                        input.schemas.every(
                            (elem: any, _index2: number) =>
                                ((("object" === typeof elem &&
                                    null !== elem &&
                                    false === Array.isArray(elem)) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".schemas[" + _index2 + "]",
                                        expected:
                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                        value: elem,
                                    })) &&
                                    $au0(
                                        elem,
                                        _path + ".schemas[" + _index2 + "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".schemas[" + _index2 + "]",
                                    expected:
                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".schemas",
                            expected: "Array<IJsonSchema>",
                            value: input.schemas,
                        })) &&
                    (((("object" === typeof input.components &&
                        null !== input.components &&
                        false === Array.isArray(input.components)) ||
                        $guard(_exceptionable, {
                            path: _path + ".components",
                            expected: "IJsonComponents",
                            value: input.components,
                        })) &&
                        $ao16(
                            input.components,
                            _path + ".components",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".components",
                            expected: "IJsonComponents",
                            value: input.components,
                        })) &&
                    ("swagger" === input.purpose ||
                        "ajv" === input.purpose ||
                        $guard(_exceptionable, {
                            path: _path + ".purpose",
                            expected: '("ajv" | "swagger")',
                            value: input.purpose,
                        }));
                const $ao1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((Array.isArray(input["enum"]) ||
                        $guard(_exceptionable, {
                            path: _path + '["enum"]',
                            expected: "Array<boolean>",
                            value: input["enum"],
                        })) &&
                        input["enum"].every(
                            (elem: any, _index3: number) =>
                                "boolean" === typeof elem ||
                                $guard(_exceptionable, {
                                    path: _path + '["enum"][' + _index3 + "]",
                                    expected: "boolean",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + '["enum"]',
                            expected: "Array<boolean>",
                            value: input["enum"],
                        })) &&
                    (undefined === input["default"] ||
                        "boolean" === typeof input["default"] ||
                        $guard(_exceptionable, {
                            path: _path + '["default"]',
                            expected: "(boolean | undefined)",
                            value: input["default"],
                        })) &&
                    ("boolean" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"boolean"',
                            value: input.type,
                        })) &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "(boolean | undefined)",
                            value: input.nullable,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index4: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index4 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                        $ao2(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index4 +
                                                "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index4 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-jsDocTags"]',
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-optional"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-optional"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao2 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.name ||
                        $guard(_exceptionable, {
                            path: _path + ".name",
                            expected: "string",
                            value: input.name,
                        })) &&
                    (undefined === input.text ||
                        ((Array.isArray(input.text) ||
                            $guard(_exceptionable, {
                                path: _path + ".text",
                                expected:
                                    "(Array<IJsDocTagInfo.IText> | undefined)",
                                value: input.text,
                            })) &&
                            input.text.every(
                                (elem: any, _index5: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".text[" +
                                                _index5 +
                                                "]",
                                            expected: "IJsDocTagInfo.IText",
                                            value: elem,
                                        })) &&
                                        $ao3(
                                            elem,
                                            _path + ".text[" + _index5 + "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".text[" + _index5 + "]",
                                        expected: "IJsDocTagInfo.IText",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + ".text",
                            expected:
                                "(Array<IJsDocTagInfo.IText> | undefined)",
                            value: input.text,
                        }));
                const $ao3 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.text ||
                        $guard(_exceptionable, {
                            path: _path + ".text",
                            expected: "string",
                            value: input.text,
                        })) &&
                    ("string" === typeof input.kind ||
                        $guard(_exceptionable, {
                            path: _path + ".kind",
                            expected: "string",
                            value: input.kind,
                        }));
                const $ao4 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((Array.isArray(input["enum"]) ||
                        $guard(_exceptionable, {
                            path: _path + '["enum"]',
                            expected: "Array<number>",
                            value: input["enum"],
                        })) &&
                        input["enum"].every(
                            (elem: any, _index6: number) =>
                                ("number" === typeof elem &&
                                    Number.isFinite(elem)) ||
                                $guard(_exceptionable, {
                                    path: _path + '["enum"][' + _index6 + "]",
                                    expected: "number",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + '["enum"]',
                            expected: "Array<number>",
                            value: input["enum"],
                        })) &&
                    (undefined === input["default"] ||
                        ("number" === typeof input["default"] &&
                            Number.isFinite(input["default"])) ||
                        $guard(_exceptionable, {
                            path: _path + '["default"]',
                            expected: "(number | undefined)",
                            value: input["default"],
                        })) &&
                    ("number" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"number"',
                            value: input.type,
                        })) &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "(boolean | undefined)",
                            value: input.nullable,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index7: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index7 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                        $ao2(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index7 +
                                                "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index7 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-jsDocTags"]',
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-optional"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-optional"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao5 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((Array.isArray(input["enum"]) ||
                        $guard(_exceptionable, {
                            path: _path + '["enum"]',
                            expected: "Array<string>",
                            value: input["enum"],
                        })) &&
                        input["enum"].every(
                            (elem: any, _index8: number) =>
                                "string" === typeof elem ||
                                $guard(_exceptionable, {
                                    path: _path + '["enum"][' + _index8 + "]",
                                    expected: "string",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + '["enum"]',
                            expected: "Array<string>",
                            value: input["enum"],
                        })) &&
                    (undefined === input["default"] ||
                        "string" === typeof input["default"] ||
                        $guard(_exceptionable, {
                            path: _path + '["default"]',
                            expected: "(string | undefined)",
                            value: input["default"],
                        })) &&
                    ("string" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"string"',
                            value: input.type,
                        })) &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "(boolean | undefined)",
                            value: input.nullable,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index9: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index9 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                        $ao2(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index9 +
                                                "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index9 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-jsDocTags"]',
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-optional"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-optional"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao6 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (undefined === input["default"] ||
                        "boolean" === typeof input["default"] ||
                        $guard(_exceptionable, {
                            path: _path + '["default"]',
                            expected: "(boolean | undefined)",
                            value: input["default"],
                        })) &&
                    ("boolean" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"boolean"',
                            value: input.type,
                        })) &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "(boolean | undefined)",
                            value: input.nullable,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index10: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index10 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                        $ao2(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index10 +
                                                "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index10 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-jsDocTags"]',
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-optional"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-optional"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao7 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (undefined === input.minimum ||
                        ("number" === typeof input.minimum &&
                            ((Math.floor(input.minimum) === input.minimum &&
                                -2147483648 <= input.minimum &&
                                input.minimum <= 2147483647) ||
                                $guard(_exceptionable, {
                                    path: _path + ".minimum",
                                    expected: 'number & Type<"int32">',
                                    value: input.minimum,
                                }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".minimum",
                            expected: '((number & Type<"int32">) | undefined)',
                            value: input.minimum,
                        })) &&
                    (undefined === input.maximum ||
                        ("number" === typeof input.maximum &&
                            ((Math.floor(input.maximum) === input.maximum &&
                                -2147483648 <= input.maximum &&
                                input.maximum <= 2147483647) ||
                                $guard(_exceptionable, {
                                    path: _path + ".maximum",
                                    expected: 'number & Type<"int32">',
                                    value: input.maximum,
                                }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".maximum",
                            expected: '((number & Type<"int32">) | undefined)',
                            value: input.maximum,
                        })) &&
                    (undefined === input.exclusiveMinimum ||
                        "boolean" === typeof input.exclusiveMinimum ||
                        $guard(_exceptionable, {
                            path: _path + ".exclusiveMinimum",
                            expected: "(boolean | undefined)",
                            value: input.exclusiveMinimum,
                        })) &&
                    (undefined === input.exclusiveMaximum ||
                        "boolean" === typeof input.exclusiveMaximum ||
                        $guard(_exceptionable, {
                            path: _path + ".exclusiveMaximum",
                            expected: "(boolean | undefined)",
                            value: input.exclusiveMaximum,
                        })) &&
                    (undefined === input.multipleOf ||
                        ("number" === typeof input.multipleOf &&
                            ((Math.floor(input.multipleOf) ===
                                input.multipleOf &&
                                -2147483648 <= input.multipleOf &&
                                input.multipleOf <= 2147483647) ||
                                $guard(_exceptionable, {
                                    path: _path + ".multipleOf",
                                    expected: 'number & Type<"int32">',
                                    value: input.multipleOf,
                                }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".multipleOf",
                            expected: '((number & Type<"int32">) | undefined)',
                            value: input.multipleOf,
                        })) &&
                    (undefined === input["default"] ||
                        ("number" === typeof input["default"] &&
                            Number.isFinite(input["default"])) ||
                        $guard(_exceptionable, {
                            path: _path + '["default"]',
                            expected: "(number | undefined)",
                            value: input["default"],
                        })) &&
                    ("integer" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"integer"',
                            value: input.type,
                        })) &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "(boolean | undefined)",
                            value: input.nullable,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index11: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index11 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                        $ao2(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index11 +
                                                "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index11 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-jsDocTags"]',
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-optional"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-optional"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao8 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (undefined === input.minimum ||
                        ("number" === typeof input.minimum &&
                            Number.isFinite(input.minimum)) ||
                        $guard(_exceptionable, {
                            path: _path + ".minimum",
                            expected: "(number | undefined)",
                            value: input.minimum,
                        })) &&
                    (undefined === input.maximum ||
                        ("number" === typeof input.maximum &&
                            Number.isFinite(input.maximum)) ||
                        $guard(_exceptionable, {
                            path: _path + ".maximum",
                            expected: "(number | undefined)",
                            value: input.maximum,
                        })) &&
                    (undefined === input.exclusiveMinimum ||
                        "boolean" === typeof input.exclusiveMinimum ||
                        $guard(_exceptionable, {
                            path: _path + ".exclusiveMinimum",
                            expected: "(boolean | undefined)",
                            value: input.exclusiveMinimum,
                        })) &&
                    (undefined === input.exclusiveMaximum ||
                        "boolean" === typeof input.exclusiveMaximum ||
                        $guard(_exceptionable, {
                            path: _path + ".exclusiveMaximum",
                            expected: "(boolean | undefined)",
                            value: input.exclusiveMaximum,
                        })) &&
                    (undefined === input.multipleOf ||
                        ("number" === typeof input.multipleOf &&
                            Number.isFinite(input.multipleOf)) ||
                        $guard(_exceptionable, {
                            path: _path + ".multipleOf",
                            expected: "(number | undefined)",
                            value: input.multipleOf,
                        })) &&
                    (undefined === input["default"] ||
                        ("number" === typeof input["default"] &&
                            Number.isFinite(input["default"])) ||
                        $guard(_exceptionable, {
                            path: _path + '["default"]',
                            expected: "(number | undefined)",
                            value: input["default"],
                        })) &&
                    ("number" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"number"',
                            value: input.type,
                        })) &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "(boolean | undefined)",
                            value: input.nullable,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index12: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index12 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                        $ao2(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index12 +
                                                "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index12 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-jsDocTags"]',
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-optional"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-optional"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao9 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (undefined === input.minLength ||
                        ("number" === typeof input.minLength &&
                            ((Math.floor(input.minLength) === input.minLength &&
                                0 <= input.minLength &&
                                input.minLength <= 4294967295) ||
                                $guard(_exceptionable, {
                                    path: _path + ".minLength",
                                    expected: 'number & Type<"uint32">',
                                    value: input.minLength,
                                }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".minLength",
                            expected: '((number & Type<"uint32">) | undefined)',
                            value: input.minLength,
                        })) &&
                    (undefined === input.maxLength ||
                        ("number" === typeof input.maxLength &&
                            ((Math.floor(input.maxLength) === input.maxLength &&
                                0 <= input.maxLength &&
                                input.maxLength <= 4294967295) ||
                                $guard(_exceptionable, {
                                    path: _path + ".maxLength",
                                    expected: 'number & Type<"uint32">',
                                    value: input.maxLength,
                                }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".maxLength",
                            expected: '((number & Type<"uint32">) | undefined)',
                            value: input.maxLength,
                        })) &&
                    (undefined === input.pattern ||
                        "string" === typeof input.pattern ||
                        $guard(_exceptionable, {
                            path: _path + ".pattern",
                            expected: "(string | undefined)",
                            value: input.pattern,
                        })) &&
                    (undefined === input.format ||
                        "string" === typeof input.format ||
                        $guard(_exceptionable, {
                            path: _path + ".format",
                            expected: "(string | undefined)",
                            value: input.format,
                        })) &&
                    (undefined === input["default"] ||
                        "string" === typeof input["default"] ||
                        $guard(_exceptionable, {
                            path: _path + '["default"]',
                            expected: "(string | undefined)",
                            value: input["default"],
                        })) &&
                    ("string" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"string"',
                            value: input.type,
                        })) &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "(boolean | undefined)",
                            value: input.nullable,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index13: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index13 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                        $ao2(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index13 +
                                                "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index13 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-jsDocTags"]',
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-optional"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-optional"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao10 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((("object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items)) ||
                        $guard(_exceptionable, {
                            path: _path + ".items",
                            expected:
                                '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                            value: input.items,
                        })) &&
                        $au0(
                            input.items,
                            _path + ".items",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".items",
                            expected:
                                '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                            value: input.items,
                        })) &&
                    (undefined === input.minItems ||
                        ("number" === typeof input.minItems &&
                            ((Math.floor(input.minItems) === input.minItems &&
                                0 <= input.minItems &&
                                input.minItems <= 4294967295) ||
                                $guard(_exceptionable, {
                                    path: _path + ".minItems",
                                    expected: 'number & Type<"uint32">',
                                    value: input.minItems,
                                }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".minItems",
                            expected: '((number & Type<"uint32">) | undefined)',
                            value: input.minItems,
                        })) &&
                    (undefined === input.maxItems ||
                        ("number" === typeof input.maxItems &&
                            ((Math.floor(input.maxItems) === input.maxItems &&
                                0 <= input.maxItems &&
                                input.maxItems <= 4294967295) ||
                                $guard(_exceptionable, {
                                    path: _path + ".maxItems",
                                    expected: 'number & Type<"uint32">',
                                    value: input.maxItems,
                                }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".maxItems",
                            expected: '((number & Type<"uint32">) | undefined)',
                            value: input.maxItems,
                        })) &&
                    (undefined === input["x-typia-tuple"] ||
                        ((("object" === typeof input["x-typia-tuple"] &&
                            null !== input["x-typia-tuple"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-tuple"]',
                                expected: "(IJsonSchema.ITuple | undefined)",
                                value: input["x-typia-tuple"],
                            })) &&
                            $ao11(
                                input["x-typia-tuple"],
                                _path + '["x-typia-tuple"]',
                                true && _exceptionable,
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-tuple"]',
                            expected: "(IJsonSchema.ITuple | undefined)",
                            value: input["x-typia-tuple"],
                        })) &&
                    ("array" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"array"',
                            value: input.type,
                        })) &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "(boolean | undefined)",
                            value: input.nullable,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index14: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index14 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                        $ao2(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index14 +
                                                "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index14 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-jsDocTags"]',
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-optional"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-optional"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao11 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((Array.isArray(input.items) ||
                        $guard(_exceptionable, {
                            path: _path + ".items",
                            expected: "Array<IJsonSchema>",
                            value: input.items,
                        })) &&
                        input.items.every(
                            (elem: any, _index15: number) =>
                                ((("object" === typeof elem &&
                                    null !== elem &&
                                    false === Array.isArray(elem)) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".items[" + _index15 + "]",
                                        expected:
                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                        value: elem,
                                    })) &&
                                    $au0(
                                        elem,
                                        _path + ".items[" + _index15 + "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".items[" + _index15 + "]",
                                    expected:
                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".items",
                            expected: "Array<IJsonSchema>",
                            value: input.items,
                        })) &&
                    (("number" === typeof input.minItems &&
                        ((Math.floor(input.minItems) === input.minItems &&
                            0 <= input.minItems &&
                            input.minItems <= 4294967295) ||
                            $guard(_exceptionable, {
                                path: _path + ".minItems",
                                expected: 'number & Type<"uint32">',
                                value: input.minItems,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".minItems",
                            expected: '(number & Type<"uint32">)',
                            value: input.minItems,
                        })) &&
                    (undefined === input.maxItems ||
                        ("number" === typeof input.maxItems &&
                            ((Math.floor(input.maxItems) === input.maxItems &&
                                0 <= input.maxItems &&
                                input.maxItems <= 4294967295) ||
                                $guard(_exceptionable, {
                                    path: _path + ".maxItems",
                                    expected: 'number & Type<"uint32">',
                                    value: input.maxItems,
                                }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".maxItems",
                            expected: '((number & Type<"uint32">) | undefined)',
                            value: input.maxItems,
                        })) &&
                    ("array" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"array"',
                            value: input.type,
                        })) &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "(boolean | undefined)",
                            value: input.nullable,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index16: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index16 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                        $ao2(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index16 +
                                                "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index16 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-jsDocTags"]',
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-optional"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-optional"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao12 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((Array.isArray(input.oneOf) ||
                        $guard(_exceptionable, {
                            path: _path + ".oneOf",
                            expected: "Array<IJsonSchema>",
                            value: input.oneOf,
                        })) &&
                        input.oneOf.every(
                            (elem: any, _index17: number) =>
                                ((("object" === typeof elem &&
                                    null !== elem &&
                                    false === Array.isArray(elem)) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".oneOf[" + _index17 + "]",
                                        expected:
                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                        value: elem,
                                    })) &&
                                    $au0(
                                        elem,
                                        _path + ".oneOf[" + _index17 + "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".oneOf[" + _index17 + "]",
                                    expected:
                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".oneOf",
                            expected: "Array<IJsonSchema>",
                            value: input.oneOf,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index18: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index18 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                        $ao2(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index18 +
                                                "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index18 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-jsDocTags"]',
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-optional"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-optional"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao13 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.$ref ||
                        $guard(_exceptionable, {
                            path: _path + ".$ref",
                            expected: "string",
                            value: input.$ref,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index19: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index19 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                        $ao2(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index19 +
                                                "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index19 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-jsDocTags"]',
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-optional"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-optional"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao14 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("null" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"null"',
                            value: input.type,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index20: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index20 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                        $ao2(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index20 +
                                                "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index20 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-jsDocTags"]',
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-optional"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-optional"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao15 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (null !== input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: "undefined",
                            value: input.type,
                        })) &&
                    (undefined === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: "undefined",
                            value: input.type,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index21: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index21 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                        $ao2(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index21 +
                                                "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index21 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-jsDocTags"]',
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-optional"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-optional"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao16 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    undefined === input.schemas ||
                    ((("object" === typeof input.schemas &&
                        null !== input.schemas &&
                        false === Array.isArray(input.schemas)) ||
                        $guard(_exceptionable, {
                            path: _path + ".schemas",
                            expected:
                                "(Record<string, IObject | IAlias> | undefined)",
                            value: input.schemas,
                        })) &&
                        $ao17(
                            input.schemas,
                            _path + ".schemas",
                            true && _exceptionable,
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + ".schemas",
                        expected:
                            "(Record<string, IObject | IAlias> | undefined)",
                        value: input.schemas,
                    });
                const $ao17 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    false === _exceptionable ||
                    Object.keys(input).every((key: any) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/(.*)/).test(key))
                            return (
                                ((("object" === typeof value &&
                                    null !== value &&
                                    false === Array.isArray(value)) ||
                                    $guard(_exceptionable, {
                                        path: _path + $join(key),
                                        expected:
                                            '(IArray & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IBoolean & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"boolean"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"number"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"string"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IInteger & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IJsonComponents.IObject | INullOnly & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | INumber & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IOneOf & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IReference & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IString & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | ITuple & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IUnknown & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; })',
                                        value: value,
                                    })) &&
                                    $au1(
                                        value,
                                        _path + $join(key),
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + $join(key),
                                    expected:
                                        '(IArray & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IBoolean & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"boolean"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"number"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"string"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IInteger & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IJsonComponents.IObject | INullOnly & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | INumber & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IOneOf & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IReference & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IString & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | ITuple & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IUnknown & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; })',
                                    value: value,
                                })
                            );
                        return true;
                    });
                const $ao18 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (undefined === input.$id ||
                        "string" === typeof input.$id ||
                        $guard(_exceptionable, {
                            path: _path + ".$id",
                            expected: "(string | undefined)",
                            value: input.$id,
                        })) &&
                    ("object" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"object"',
                            value: input.type,
                        })) &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "(boolean | undefined)",
                            value: input.nullable,
                        })) &&
                    (((("object" === typeof input.properties &&
                        null !== input.properties &&
                        false === Array.isArray(input.properties)) ||
                        $guard(_exceptionable, {
                            path: _path + ".properties",
                            expected: "Record<string, IJsonSchema>",
                            value: input.properties,
                        })) &&
                        $ao19(
                            input.properties,
                            _path + ".properties",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".properties",
                            expected: "Record<string, IJsonSchema>",
                            value: input.properties,
                        })) &&
                    (undefined === input.patternProperties ||
                        ((("object" === typeof input.patternProperties &&
                            null !== input.patternProperties &&
                            false === Array.isArray(input.patternProperties)) ||
                            $guard(_exceptionable, {
                                path: _path + ".patternProperties",
                                expected:
                                    "(Record<string, IJsonSchema> | undefined)",
                                value: input.patternProperties,
                            })) &&
                            $ao19(
                                input.patternProperties,
                                _path + ".patternProperties",
                                true && _exceptionable,
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + ".patternProperties",
                            expected:
                                "(Record<string, IJsonSchema> | undefined)",
                            value: input.patternProperties,
                        })) &&
                    (undefined === input.additionalProperties ||
                        ((("object" === typeof input.additionalProperties &&
                            null !== input.additionalProperties &&
                            false ===
                                Array.isArray(input.additionalProperties)) ||
                            $guard(_exceptionable, {
                                path: _path + ".additionalProperties",
                                expected:
                                    '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                                value: input.additionalProperties,
                            })) &&
                            $au0(
                                input.additionalProperties,
                                _path + ".additionalProperties",
                                true && _exceptionable,
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + ".additionalProperties",
                            expected:
                                '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                            value: input.additionalProperties,
                        })) &&
                    (undefined === input.required ||
                        ((Array.isArray(input.required) ||
                            $guard(_exceptionable, {
                                path: _path + ".required",
                                expected: "(Array<string> | undefined)",
                                value: input.required,
                            })) &&
                            input.required.every(
                                (elem: any, _index22: number) =>
                                    "string" === typeof elem ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".required[" +
                                            _index22 +
                                            "]",
                                        expected: "string",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + ".required",
                            expected: "(Array<string> | undefined)",
                            value: input.required,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index23: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index23 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                        $ao2(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index23 +
                                                "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index23 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-jsDocTags"]',
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                    (undefined === input["x-typia-patternProperties"] ||
                        ((("object" ===
                            typeof input["x-typia-patternProperties"] &&
                            null !== input["x-typia-patternProperties"] &&
                            false ===
                                Array.isArray(
                                    input["x-typia-patternProperties"],
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-patternProperties"]',
                                expected:
                                    "(Record<string, IJsonSchema> | undefined)",
                                value: input["x-typia-patternProperties"],
                            })) &&
                            $ao19(
                                input["x-typia-patternProperties"],
                                _path + '["x-typia-patternProperties"]',
                                true && _exceptionable,
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-patternProperties"]',
                            expected:
                                "(Record<string, IJsonSchema> | undefined)",
                            value: input["x-typia-patternProperties"],
                        })) &&
                    (undefined === input["x-typia-additionalProperties"] ||
                        ((("object" ===
                            typeof input["x-typia-additionalProperties"] &&
                            null !== input["x-typia-additionalProperties"] &&
                            false ===
                                Array.isArray(
                                    input["x-typia-additionalProperties"],
                                )) ||
                            $guard(_exceptionable, {
                                path:
                                    _path + '["x-typia-additionalProperties"]',
                                expected:
                                    '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                                value: input["x-typia-additionalProperties"],
                            })) &&
                            $au0(
                                input["x-typia-additionalProperties"],
                                _path + '["x-typia-additionalProperties"]',
                                true && _exceptionable,
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-additionalProperties"]',
                            expected:
                                '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                            value: input["x-typia-additionalProperties"],
                        }));
                const $ao19 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    false === _exceptionable ||
                    Object.keys(input).every((key: any) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/(.*)/).test(key))
                            return (
                                ((("object" === typeof value &&
                                    null !== value &&
                                    false === Array.isArray(value)) ||
                                    $guard(_exceptionable, {
                                        path: _path + $join(key),
                                        expected:
                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                        value: value,
                                    })) &&
                                    $au0(
                                        value,
                                        _path + $join(key),
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + $join(key),
                                    expected:
                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                    value: value,
                                })
                            );
                        return true;
                    });
                const $ao20 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((Array.isArray(input["enum"]) ||
                        $guard(_exceptionable, {
                            path: _path + '["enum"]',
                            expected: "Array<boolean>",
                            value: input["enum"],
                        })) &&
                        input["enum"].every(
                            (elem: any, _index24: number) =>
                                "boolean" === typeof elem ||
                                $guard(_exceptionable, {
                                    path: _path + '["enum"][' + _index24 + "]",
                                    expected: "boolean",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + '["enum"]',
                            expected: "Array<boolean>",
                            value: input["enum"],
                        })) &&
                    (undefined === input["default"] ||
                        "boolean" === typeof input["default"] ||
                        $guard(_exceptionable, {
                            path: _path + '["default"]',
                            expected: "(boolean | undefined)",
                            value: input["default"],
                        })) &&
                    ("boolean" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"boolean"',
                            value: input.type,
                        })) &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "(boolean | undefined)",
                            value: input.nullable,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index25: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index25 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                        $ao2(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index25 +
                                                "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index25 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-jsDocTags"]',
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-optional"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-optional"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        })) &&
                    (undefined === input.$id ||
                        "string" === typeof input.$id ||
                        $guard(_exceptionable, {
                            path: _path + ".$id",
                            expected: "(string | undefined)",
                            value: input.$id,
                        })) &&
                    (undefined === input.$recursiveAnchor ||
                        "boolean" === typeof input.$recursiveAnchor ||
                        $guard(_exceptionable, {
                            path: _path + ".$recursiveAnchor",
                            expected: "(boolean | undefined)",
                            value: input.$recursiveAnchor,
                        }));
                const $ao21 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((Array.isArray(input["enum"]) ||
                        $guard(_exceptionable, {
                            path: _path + '["enum"]',
                            expected: "Array<number>",
                            value: input["enum"],
                        })) &&
                        input["enum"].every(
                            (elem: any, _index26: number) =>
                                ("number" === typeof elem &&
                                    Number.isFinite(elem)) ||
                                $guard(_exceptionable, {
                                    path: _path + '["enum"][' + _index26 + "]",
                                    expected: "number",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + '["enum"]',
                            expected: "Array<number>",
                            value: input["enum"],
                        })) &&
                    (undefined === input["default"] ||
                        ("number" === typeof input["default"] &&
                            Number.isFinite(input["default"])) ||
                        $guard(_exceptionable, {
                            path: _path + '["default"]',
                            expected: "(number | undefined)",
                            value: input["default"],
                        })) &&
                    ("number" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"number"',
                            value: input.type,
                        })) &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "(boolean | undefined)",
                            value: input.nullable,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index27: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index27 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                        $ao2(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index27 +
                                                "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index27 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-jsDocTags"]',
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-optional"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-optional"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        })) &&
                    (undefined === input.$id ||
                        "string" === typeof input.$id ||
                        $guard(_exceptionable, {
                            path: _path + ".$id",
                            expected: "(string | undefined)",
                            value: input.$id,
                        })) &&
                    (undefined === input.$recursiveAnchor ||
                        "boolean" === typeof input.$recursiveAnchor ||
                        $guard(_exceptionable, {
                            path: _path + ".$recursiveAnchor",
                            expected: "(boolean | undefined)",
                            value: input.$recursiveAnchor,
                        }));
                const $ao22 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((Array.isArray(input["enum"]) ||
                        $guard(_exceptionable, {
                            path: _path + '["enum"]',
                            expected: "Array<string>",
                            value: input["enum"],
                        })) &&
                        input["enum"].every(
                            (elem: any, _index28: number) =>
                                "string" === typeof elem ||
                                $guard(_exceptionable, {
                                    path: _path + '["enum"][' + _index28 + "]",
                                    expected: "string",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + '["enum"]',
                            expected: "Array<string>",
                            value: input["enum"],
                        })) &&
                    (undefined === input["default"] ||
                        "string" === typeof input["default"] ||
                        $guard(_exceptionable, {
                            path: _path + '["default"]',
                            expected: "(string | undefined)",
                            value: input["default"],
                        })) &&
                    ("string" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"string"',
                            value: input.type,
                        })) &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "(boolean | undefined)",
                            value: input.nullable,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index29: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index29 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                        $ao2(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index29 +
                                                "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index29 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-jsDocTags"]',
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-optional"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-optional"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        })) &&
                    (undefined === input.$id ||
                        "string" === typeof input.$id ||
                        $guard(_exceptionable, {
                            path: _path + ".$id",
                            expected: "(string | undefined)",
                            value: input.$id,
                        })) &&
                    (undefined === input.$recursiveAnchor ||
                        "boolean" === typeof input.$recursiveAnchor ||
                        $guard(_exceptionable, {
                            path: _path + ".$recursiveAnchor",
                            expected: "(boolean | undefined)",
                            value: input.$recursiveAnchor,
                        }));
                const $ao23 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (undefined === input["default"] ||
                        "boolean" === typeof input["default"] ||
                        $guard(_exceptionable, {
                            path: _path + '["default"]',
                            expected: "(boolean | undefined)",
                            value: input["default"],
                        })) &&
                    ("boolean" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"boolean"',
                            value: input.type,
                        })) &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "(boolean | undefined)",
                            value: input.nullable,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index30: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index30 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                        $ao2(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index30 +
                                                "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index30 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-jsDocTags"]',
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-optional"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-optional"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        })) &&
                    (undefined === input.$id ||
                        "string" === typeof input.$id ||
                        $guard(_exceptionable, {
                            path: _path + ".$id",
                            expected: "(string | undefined)",
                            value: input.$id,
                        })) &&
                    (undefined === input.$recursiveAnchor ||
                        "boolean" === typeof input.$recursiveAnchor ||
                        $guard(_exceptionable, {
                            path: _path + ".$recursiveAnchor",
                            expected: "(boolean | undefined)",
                            value: input.$recursiveAnchor,
                        }));
                const $ao24 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (undefined === input.minimum ||
                        ("number" === typeof input.minimum &&
                            ((Math.floor(input.minimum) === input.minimum &&
                                -2147483648 <= input.minimum &&
                                input.minimum <= 2147483647) ||
                                $guard(_exceptionable, {
                                    path: _path + ".minimum",
                                    expected: 'number & Type<"int32">',
                                    value: input.minimum,
                                }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".minimum",
                            expected: '((number & Type<"int32">) | undefined)',
                            value: input.minimum,
                        })) &&
                    (undefined === input.maximum ||
                        ("number" === typeof input.maximum &&
                            ((Math.floor(input.maximum) === input.maximum &&
                                -2147483648 <= input.maximum &&
                                input.maximum <= 2147483647) ||
                                $guard(_exceptionable, {
                                    path: _path + ".maximum",
                                    expected: 'number & Type<"int32">',
                                    value: input.maximum,
                                }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".maximum",
                            expected: '((number & Type<"int32">) | undefined)',
                            value: input.maximum,
                        })) &&
                    (undefined === input.exclusiveMinimum ||
                        "boolean" === typeof input.exclusiveMinimum ||
                        $guard(_exceptionable, {
                            path: _path + ".exclusiveMinimum",
                            expected: "(boolean | undefined)",
                            value: input.exclusiveMinimum,
                        })) &&
                    (undefined === input.exclusiveMaximum ||
                        "boolean" === typeof input.exclusiveMaximum ||
                        $guard(_exceptionable, {
                            path: _path + ".exclusiveMaximum",
                            expected: "(boolean | undefined)",
                            value: input.exclusiveMaximum,
                        })) &&
                    (undefined === input.multipleOf ||
                        ("number" === typeof input.multipleOf &&
                            ((Math.floor(input.multipleOf) ===
                                input.multipleOf &&
                                -2147483648 <= input.multipleOf &&
                                input.multipleOf <= 2147483647) ||
                                $guard(_exceptionable, {
                                    path: _path + ".multipleOf",
                                    expected: 'number & Type<"int32">',
                                    value: input.multipleOf,
                                }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".multipleOf",
                            expected: '((number & Type<"int32">) | undefined)',
                            value: input.multipleOf,
                        })) &&
                    (undefined === input["default"] ||
                        ("number" === typeof input["default"] &&
                            Number.isFinite(input["default"])) ||
                        $guard(_exceptionable, {
                            path: _path + '["default"]',
                            expected: "(number | undefined)",
                            value: input["default"],
                        })) &&
                    ("integer" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"integer"',
                            value: input.type,
                        })) &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "(boolean | undefined)",
                            value: input.nullable,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index31: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index31 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                        $ao2(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index31 +
                                                "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index31 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-jsDocTags"]',
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-optional"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-optional"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        })) &&
                    (undefined === input.$id ||
                        "string" === typeof input.$id ||
                        $guard(_exceptionable, {
                            path: _path + ".$id",
                            expected: "(string | undefined)",
                            value: input.$id,
                        })) &&
                    (undefined === input.$recursiveAnchor ||
                        "boolean" === typeof input.$recursiveAnchor ||
                        $guard(_exceptionable, {
                            path: _path + ".$recursiveAnchor",
                            expected: "(boolean | undefined)",
                            value: input.$recursiveAnchor,
                        }));
                const $ao25 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (undefined === input.minimum ||
                        ("number" === typeof input.minimum &&
                            Number.isFinite(input.minimum)) ||
                        $guard(_exceptionable, {
                            path: _path + ".minimum",
                            expected: "(number | undefined)",
                            value: input.minimum,
                        })) &&
                    (undefined === input.maximum ||
                        ("number" === typeof input.maximum &&
                            Number.isFinite(input.maximum)) ||
                        $guard(_exceptionable, {
                            path: _path + ".maximum",
                            expected: "(number | undefined)",
                            value: input.maximum,
                        })) &&
                    (undefined === input.exclusiveMinimum ||
                        "boolean" === typeof input.exclusiveMinimum ||
                        $guard(_exceptionable, {
                            path: _path + ".exclusiveMinimum",
                            expected: "(boolean | undefined)",
                            value: input.exclusiveMinimum,
                        })) &&
                    (undefined === input.exclusiveMaximum ||
                        "boolean" === typeof input.exclusiveMaximum ||
                        $guard(_exceptionable, {
                            path: _path + ".exclusiveMaximum",
                            expected: "(boolean | undefined)",
                            value: input.exclusiveMaximum,
                        })) &&
                    (undefined === input.multipleOf ||
                        ("number" === typeof input.multipleOf &&
                            Number.isFinite(input.multipleOf)) ||
                        $guard(_exceptionable, {
                            path: _path + ".multipleOf",
                            expected: "(number | undefined)",
                            value: input.multipleOf,
                        })) &&
                    (undefined === input["default"] ||
                        ("number" === typeof input["default"] &&
                            Number.isFinite(input["default"])) ||
                        $guard(_exceptionable, {
                            path: _path + '["default"]',
                            expected: "(number | undefined)",
                            value: input["default"],
                        })) &&
                    ("number" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"number"',
                            value: input.type,
                        })) &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "(boolean | undefined)",
                            value: input.nullable,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index32: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index32 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                        $ao2(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index32 +
                                                "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index32 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-jsDocTags"]',
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-optional"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-optional"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        })) &&
                    (undefined === input.$id ||
                        "string" === typeof input.$id ||
                        $guard(_exceptionable, {
                            path: _path + ".$id",
                            expected: "(string | undefined)",
                            value: input.$id,
                        })) &&
                    (undefined === input.$recursiveAnchor ||
                        "boolean" === typeof input.$recursiveAnchor ||
                        $guard(_exceptionable, {
                            path: _path + ".$recursiveAnchor",
                            expected: "(boolean | undefined)",
                            value: input.$recursiveAnchor,
                        }));
                const $ao26 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (undefined === input.minLength ||
                        ("number" === typeof input.minLength &&
                            ((Math.floor(input.minLength) === input.minLength &&
                                0 <= input.minLength &&
                                input.minLength <= 4294967295) ||
                                $guard(_exceptionable, {
                                    path: _path + ".minLength",
                                    expected: 'number & Type<"uint32">',
                                    value: input.minLength,
                                }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".minLength",
                            expected: '((number & Type<"uint32">) | undefined)',
                            value: input.minLength,
                        })) &&
                    (undefined === input.maxLength ||
                        ("number" === typeof input.maxLength &&
                            ((Math.floor(input.maxLength) === input.maxLength &&
                                0 <= input.maxLength &&
                                input.maxLength <= 4294967295) ||
                                $guard(_exceptionable, {
                                    path: _path + ".maxLength",
                                    expected: 'number & Type<"uint32">',
                                    value: input.maxLength,
                                }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".maxLength",
                            expected: '((number & Type<"uint32">) | undefined)',
                            value: input.maxLength,
                        })) &&
                    (undefined === input.pattern ||
                        "string" === typeof input.pattern ||
                        $guard(_exceptionable, {
                            path: _path + ".pattern",
                            expected: "(string | undefined)",
                            value: input.pattern,
                        })) &&
                    (undefined === input.format ||
                        "string" === typeof input.format ||
                        $guard(_exceptionable, {
                            path: _path + ".format",
                            expected: "(string | undefined)",
                            value: input.format,
                        })) &&
                    (undefined === input["default"] ||
                        "string" === typeof input["default"] ||
                        $guard(_exceptionable, {
                            path: _path + '["default"]',
                            expected: "(string | undefined)",
                            value: input["default"],
                        })) &&
                    ("string" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"string"',
                            value: input.type,
                        })) &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "(boolean | undefined)",
                            value: input.nullable,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index33: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index33 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                        $ao2(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index33 +
                                                "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index33 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-jsDocTags"]',
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-optional"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-optional"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        })) &&
                    (undefined === input.$id ||
                        "string" === typeof input.$id ||
                        $guard(_exceptionable, {
                            path: _path + ".$id",
                            expected: "(string | undefined)",
                            value: input.$id,
                        })) &&
                    (undefined === input.$recursiveAnchor ||
                        "boolean" === typeof input.$recursiveAnchor ||
                        $guard(_exceptionable, {
                            path: _path + ".$recursiveAnchor",
                            expected: "(boolean | undefined)",
                            value: input.$recursiveAnchor,
                        }));
                const $ao27 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((("object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items)) ||
                        $guard(_exceptionable, {
                            path: _path + ".items",
                            expected:
                                '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                            value: input.items,
                        })) &&
                        $au0(
                            input.items,
                            _path + ".items",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".items",
                            expected:
                                '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                            value: input.items,
                        })) &&
                    (undefined === input.minItems ||
                        ("number" === typeof input.minItems &&
                            ((Math.floor(input.minItems) === input.minItems &&
                                0 <= input.minItems &&
                                input.minItems <= 4294967295) ||
                                $guard(_exceptionable, {
                                    path: _path + ".minItems",
                                    expected: 'number & Type<"uint32">',
                                    value: input.minItems,
                                }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".minItems",
                            expected: '((number & Type<"uint32">) | undefined)',
                            value: input.minItems,
                        })) &&
                    (undefined === input.maxItems ||
                        ("number" === typeof input.maxItems &&
                            ((Math.floor(input.maxItems) === input.maxItems &&
                                0 <= input.maxItems &&
                                input.maxItems <= 4294967295) ||
                                $guard(_exceptionable, {
                                    path: _path + ".maxItems",
                                    expected: 'number & Type<"uint32">',
                                    value: input.maxItems,
                                }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".maxItems",
                            expected: '((number & Type<"uint32">) | undefined)',
                            value: input.maxItems,
                        })) &&
                    (undefined === input["x-typia-tuple"] ||
                        ((("object" === typeof input["x-typia-tuple"] &&
                            null !== input["x-typia-tuple"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-tuple"]',
                                expected: "(IJsonSchema.ITuple | undefined)",
                                value: input["x-typia-tuple"],
                            })) &&
                            $ao11(
                                input["x-typia-tuple"],
                                _path + '["x-typia-tuple"]',
                                true && _exceptionable,
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-tuple"]',
                            expected: "(IJsonSchema.ITuple | undefined)",
                            value: input["x-typia-tuple"],
                        })) &&
                    ("array" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"array"',
                            value: input.type,
                        })) &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "(boolean | undefined)",
                            value: input.nullable,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index34: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index34 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                        $ao2(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index34 +
                                                "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index34 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-jsDocTags"]',
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-optional"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-optional"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        })) &&
                    (undefined === input.$id ||
                        "string" === typeof input.$id ||
                        $guard(_exceptionable, {
                            path: _path + ".$id",
                            expected: "(string | undefined)",
                            value: input.$id,
                        })) &&
                    (undefined === input.$recursiveAnchor ||
                        "boolean" === typeof input.$recursiveAnchor ||
                        $guard(_exceptionable, {
                            path: _path + ".$recursiveAnchor",
                            expected: "(boolean | undefined)",
                            value: input.$recursiveAnchor,
                        }));
                const $ao28 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((Array.isArray(input.items) ||
                        $guard(_exceptionable, {
                            path: _path + ".items",
                            expected: "Array<IJsonSchema>",
                            value: input.items,
                        })) &&
                        input.items.every(
                            (elem: any, _index35: number) =>
                                ((("object" === typeof elem &&
                                    null !== elem &&
                                    false === Array.isArray(elem)) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".items[" + _index35 + "]",
                                        expected:
                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                        value: elem,
                                    })) &&
                                    $au0(
                                        elem,
                                        _path + ".items[" + _index35 + "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".items[" + _index35 + "]",
                                    expected:
                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".items",
                            expected: "Array<IJsonSchema>",
                            value: input.items,
                        })) &&
                    (("number" === typeof input.minItems &&
                        ((Math.floor(input.minItems) === input.minItems &&
                            0 <= input.minItems &&
                            input.minItems <= 4294967295) ||
                            $guard(_exceptionable, {
                                path: _path + ".minItems",
                                expected: 'number & Type<"uint32">',
                                value: input.minItems,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".minItems",
                            expected: '(number & Type<"uint32">)',
                            value: input.minItems,
                        })) &&
                    (undefined === input.maxItems ||
                        ("number" === typeof input.maxItems &&
                            ((Math.floor(input.maxItems) === input.maxItems &&
                                0 <= input.maxItems &&
                                input.maxItems <= 4294967295) ||
                                $guard(_exceptionable, {
                                    path: _path + ".maxItems",
                                    expected: 'number & Type<"uint32">',
                                    value: input.maxItems,
                                }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".maxItems",
                            expected: '((number & Type<"uint32">) | undefined)',
                            value: input.maxItems,
                        })) &&
                    ("array" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"array"',
                            value: input.type,
                        })) &&
                    (undefined === input.nullable ||
                        "boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "(boolean | undefined)",
                            value: input.nullable,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index36: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index36 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                        $ao2(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index36 +
                                                "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index36 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-jsDocTags"]',
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-optional"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-optional"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        })) &&
                    (undefined === input.$id ||
                        "string" === typeof input.$id ||
                        $guard(_exceptionable, {
                            path: _path + ".$id",
                            expected: "(string | undefined)",
                            value: input.$id,
                        })) &&
                    (undefined === input.$recursiveAnchor ||
                        "boolean" === typeof input.$recursiveAnchor ||
                        $guard(_exceptionable, {
                            path: _path + ".$recursiveAnchor",
                            expected: "(boolean | undefined)",
                            value: input.$recursiveAnchor,
                        }));
                const $ao29 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((Array.isArray(input.oneOf) ||
                        $guard(_exceptionable, {
                            path: _path + ".oneOf",
                            expected: "Array<IJsonSchema>",
                            value: input.oneOf,
                        })) &&
                        input.oneOf.every(
                            (elem: any, _index37: number) =>
                                ((("object" === typeof elem &&
                                    null !== elem &&
                                    false === Array.isArray(elem)) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".oneOf[" + _index37 + "]",
                                        expected:
                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                        value: elem,
                                    })) &&
                                    $au0(
                                        elem,
                                        _path + ".oneOf[" + _index37 + "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".oneOf[" + _index37 + "]",
                                    expected:
                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".oneOf",
                            expected: "Array<IJsonSchema>",
                            value: input.oneOf,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index38: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index38 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                        $ao2(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index38 +
                                                "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index38 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-jsDocTags"]',
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-optional"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-optional"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        })) &&
                    (undefined === input.$id ||
                        "string" === typeof input.$id ||
                        $guard(_exceptionable, {
                            path: _path + ".$id",
                            expected: "(string | undefined)",
                            value: input.$id,
                        })) &&
                    (undefined === input.$recursiveAnchor ||
                        "boolean" === typeof input.$recursiveAnchor ||
                        $guard(_exceptionable, {
                            path: _path + ".$recursiveAnchor",
                            expected: "(boolean | undefined)",
                            value: input.$recursiveAnchor,
                        }));
                const $ao30 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.$ref ||
                        $guard(_exceptionable, {
                            path: _path + ".$ref",
                            expected: "string",
                            value: input.$ref,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index39: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index39 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                        $ao2(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index39 +
                                                "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index39 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-jsDocTags"]',
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-optional"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-optional"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        })) &&
                    (undefined === input.$id ||
                        "string" === typeof input.$id ||
                        $guard(_exceptionable, {
                            path: _path + ".$id",
                            expected: "(string | undefined)",
                            value: input.$id,
                        })) &&
                    (undefined === input.$recursiveAnchor ||
                        "boolean" === typeof input.$recursiveAnchor ||
                        $guard(_exceptionable, {
                            path: _path + ".$recursiveAnchor",
                            expected: "(boolean | undefined)",
                            value: input.$recursiveAnchor,
                        }));
                const $ao31 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("null" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"null"',
                            value: input.type,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index40: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index40 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                        $ao2(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index40 +
                                                "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index40 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-jsDocTags"]',
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-optional"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-optional"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        })) &&
                    (undefined === input.$id ||
                        "string" === typeof input.$id ||
                        $guard(_exceptionable, {
                            path: _path + ".$id",
                            expected: "(string | undefined)",
                            value: input.$id,
                        })) &&
                    (undefined === input.$recursiveAnchor ||
                        "boolean" === typeof input.$recursiveAnchor ||
                        $guard(_exceptionable, {
                            path: _path + ".$recursiveAnchor",
                            expected: "(boolean | undefined)",
                            value: input.$recursiveAnchor,
                        }));
                const $ao32 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (null !== input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: "undefined",
                            value: input.type,
                        })) &&
                    (undefined === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: "undefined",
                            value: input.type,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index41: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index41 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                        $ao2(
                                            elem,
                                            _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index41 +
                                                "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index41 +
                                            "]",
                                        expected: "IJsDocTagInfo",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-jsDocTags"]',
                            expected: "(Array<IJsDocTagInfo> | undefined)",
                            value: input["x-typia-jsDocTags"],
                        })) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-optional"] ||
                        "boolean" === typeof input["x-typia-optional"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-optional"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-optional"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        })) &&
                    (undefined === input.$id ||
                        "string" === typeof input.$id ||
                        $guard(_exceptionable, {
                            path: _path + ".$id",
                            expected: "(string | undefined)",
                            value: input.$id,
                        })) &&
                    (undefined === input.$recursiveAnchor ||
                        "boolean" === typeof input.$recursiveAnchor ||
                        $guard(_exceptionable, {
                            path: _path + ".$recursiveAnchor",
                            expected: "(boolean | undefined)",
                            value: input.$recursiveAnchor,
                        }));
                const $au0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    (() => {
                        if ("integer" === input.type)
                            return $ao7(input, _path, true && _exceptionable);
                        else if (
                            "object" === typeof input.items &&
                            null !== input.items &&
                            false === Array.isArray(input.items) &&
                            $au0(
                                input.items,
                                _path + ".items",
                                false && _exceptionable,
                            )
                        )
                            return $ao10(input, _path, true && _exceptionable);
                        else if (
                            Array.isArray(input.items) &&
                            input.items.every(
                                (elem: any, _index42: number) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    false === Array.isArray(elem) &&
                                    $au0(
                                        elem,
                                        _path + ".items[" + _index42 + "]",
                                        false && _exceptionable,
                                    ),
                            )
                        )
                            return $ao11(input, _path, true && _exceptionable);
                        else if (undefined !== input.oneOf)
                            return $ao12(input, _path, true && _exceptionable);
                        else if (undefined !== input.$ref)
                            return $ao13(input, _path, true && _exceptionable);
                        else if ("null" === input.type)
                            return $ao14(input, _path, true && _exceptionable);
                        else
                            return (
                                $ao5(input, _path, false && _exceptionable) ||
                                $ao4(input, _path, false && _exceptionable) ||
                                $ao1(input, _path, false && _exceptionable) ||
                                $ao6(input, _path, false && _exceptionable) ||
                                $ao8(input, _path, false && _exceptionable) ||
                                $ao9(input, _path, false && _exceptionable) ||
                                $ao15(input, _path, false && _exceptionable) ||
                                $guard(_exceptionable, {
                                    path: _path,
                                    expected:
                                        '(IJsonSchema.IEnumeration<"string"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IBoolean | IJsonSchema.INumber | IJsonSchema.IString | IJsonSchema.IUnknown)',
                                    value: input,
                                })
                            );
                    })();
                const $au1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    (() => {
                        if ("object" === input.type)
                            return $ao18(input, _path, true && _exceptionable);
                        else if ("integer" === input.type)
                            return $ao24(input, _path, true && _exceptionable);
                        else if (
                            "object" === typeof input.items &&
                            null !== input.items &&
                            false === Array.isArray(input.items) &&
                            $au0(
                                input.items,
                                _path + ".items",
                                false && _exceptionable,
                            )
                        )
                            return $ao27(input, _path, true && _exceptionable);
                        else if (
                            Array.isArray(input.items) &&
                            input.items.every(
                                (elem: any, _index43: number) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    false === Array.isArray(elem) &&
                                    $au0(
                                        elem,
                                        _path + ".items[" + _index43 + "]",
                                        false && _exceptionable,
                                    ),
                            )
                        )
                            return $ao28(input, _path, true && _exceptionable);
                        else if (undefined !== input.oneOf)
                            return $ao29(input, _path, true && _exceptionable);
                        else if (undefined !== input.$ref)
                            return $ao30(input, _path, true && _exceptionable);
                        else if ("null" === input.type)
                            return $ao31(input, _path, true && _exceptionable);
                        else
                            return (
                                $ao22(input, _path, false && _exceptionable) ||
                                $ao21(input, _path, false && _exceptionable) ||
                                $ao20(input, _path, false && _exceptionable) ||
                                $ao23(input, _path, false && _exceptionable) ||
                                $ao25(input, _path, false && _exceptionable) ||
                                $ao26(input, _path, false && _exceptionable) ||
                                $ao32(input, _path, false && _exceptionable) ||
                                $guard(_exceptionable, {
                                    path: _path,
                                    expected:
                                        '(IEnumeration<"string"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"number"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IEnumeration<"boolean"> & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IBoolean & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | INumber & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IString & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; } | IUnknown & { $id?: string | undefined; $recursiveAnchor?: boolean | undefined; })',
                                    value: input,
                                })
                            );
                    })();
                return (
                    ((Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "UltimateUnion",
                            value: input,
                        })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "IJsonApplication",
                                        value: elem,
                                    })) &&
                                    $ao0(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true,
                                    )) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected: "IJsonApplication",
                                    value: elem,
                                }),
                        )) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "UltimateUnion",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
});
