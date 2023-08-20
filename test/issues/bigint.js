//-----------------------------------------
// INT
//-----------------------------------------

generator => {
        const $generator = typia_1.default.createRandom.generator;
        const $ro0 = (_recursive = false, _depth = 0) => ({
            value: (generator?.array ?? $generator.array)(() => $ro1(_recursive, _recursive ? 1 + _depth : _depth))
        });
        const $ro1 = (_recursive = false, _depth = 0) => ({
            greater: (generator?.customs ?? $generator.customs)?.number?.([
                {
                    name: "type",
                    value: "int"
                },
                {
                    name: "exclusiveMinimum",
                    value: "3"
                }
            ]) ?? (generator?.integer ?? $generator.integer)(4, 14),
            greater_equal: (generator?.customs ?? $generator.customs)?.number?.([
                {
                    name: "type",
                    value: "int"
                },
                {
                    name: "minimum",
                    value: "3"
                }
            ]) ?? (generator?.integer ?? $generator.integer)(3, 13),
            less: (generator?.customs ?? $generator.customs)?.number?.([
                {
                    name: "type",
                    value: "int"
                },
                {
                    name: "exclusiveMaximum",
                    value: "7"
                }
            ]) ?? (generator?.integer ?? $generator.integer)(-4, 6),
            less_equal: (generator?.customs ?? $generator.customs)?.number?.([
                {
                    name: "type",
                    value: "int"
                },
                {
                    name: "maximum",
                    value: "7"
                }
            ]) ?? (generator?.integer ?? $generator.integer)(-3, 7),
            greater_less: (generator?.customs ?? $generator.customs)?.number?.([
                {
                    name: "type",
                    value: "int"
                },
                {
                    name: "exclusiveMinimum",
                    value: "3"
                },
                {
                    name: "exclusiveMaximum",
                    value: "7"
                }
            ]) ?? (generator?.integer ?? $generator.integer)(4, 6),
            greater_equal_less: (generator?.customs ?? $generator.customs)?.number?.([
                {
                    name: "type",
                    value: "int"
                },
                {
                    name: "minimum",
                    value: "3"
                },
                {
                    name: "exclusiveMaximum",
                    value: "7"
                }
            ]) ?? (generator?.integer ?? $generator.integer)(3, 6),
            greater_less_equal: (generator?.customs ?? $generator.customs)?.number?.([
                {
                    name: "type",
                    value: "int"
                },
                {
                    name: "exclusiveMinimum",
                    value: "3"
                },
                {
                    name: "maximum",
                    value: "7"
                }
            ]) ?? (generator?.integer ?? $generator.integer)(4, 7),
            greater_equal_less_equal: (generator?.customs ?? $generator.customs)?.number?.([
                {
                    name: "type",
                    value: "int"
                },
                {
                    name: "minimum",
                    value: "3"
                },
                {
                    name: "maximum",
                    value: "7"
                }
            ]) ?? (generator?.integer ?? $generator.integer)(3, 7),
            equal: (generator?.customs ?? $generator.customs)?.number?.([
                {
                    name: "type",
                    value: "int"
                },
                {
                    name: "minimum",
                    value: "10"
                },
                {
                    name: "maximum",
                    value: "10"
                }
            ]) ?? (generator?.integer ?? $generator.integer)(10, 10)
        });
        return $ro0();
    }
//-----------------------------------------
// BIGINT
//-----------------------------------------
generator => {
        const $generator = typia_1.default.createRandom.generator;
        const $ro0 = (_recursive = false, _depth = 0) => ({
            value: (generator?.array ?? $generator.array)(() => $ro1(_recursive, _recursive ? 1 + _depth : _depth))
        });
        const $ro1 = (_recursive = false, _depth = 0) => ({
            greater: (generator?.customs ?? $generator.customs)?.bigint?.([
                {
                    name: "exclusiveMinimum",
                    value: "3"
                }
            ]) ?? (generator?.bigint ?? $generator.bigint)(BigInt(4), BigInt(14)),
            greater_equal: (generator?.customs ?? $generator.customs)?.bigint?.([
                {
                    name: "minimum",
                    value: "3"
                }
            ]) ?? (generator?.bigint ?? $generator.bigint)(BigInt(3), BigInt(13)),
            less: (generator?.customs ?? $generator.customs)?.bigint?.([
                {
                    name: "exclusiveMaximum",
                    value: "7"
                }
            ]) ?? (generator?.bigint ?? $generator.bigint)(BigInt(-4), BigInt(6)),
            less_equal: (generator?.customs ?? $generator.customs)?.bigint?.([
                {
                    name: "maximum",
                    value: "7"
                }
            ]) ?? (generator?.bigint ?? $generator.bigint)(BigInt(-3), BigInt(7)),
            greater_less: (generator?.customs ?? $generator.customs)?.bigint?.([
                {
                    name: "exclusiveMinimum",
                    value: "3"
                },
                {
                    name: "exclusiveMaximum",
                    value: "7"
                }
            ]) ?? (generator?.bigint ?? $generator.bigint)(BigInt(4), BigInt(6)),
            greater_equal_less: (generator?.customs ?? $generator.customs)?.bigint?.([
                {
                    name: "minimum",
                    value: "3"
                },
                {
                    name: "exclusiveMaximum",
                    value: "7"
                }
            ]) ?? (generator?.bigint ?? $generator.bigint)(BigInt(3), BigInt(6)),
            greater_less_equal: (generator?.customs ?? $generator.customs)?.bigint?.([
                {
                    name: "exclusiveMinimum",
                    value: "3"
                },
                {
                    name: "maximum",
                    value: "7"
                }
            ]) ?? (generator?.bigint ?? $generator.bigint)(BigInt(4), BigInt(7)),
            greater_equal_less_equal: (generator?.customs ?? $generator.customs)?.bigint?.([
                {
                    name: "minimum",
                    value: "3"
                },
                {
                    name: "maximum",
                    value: "7"
                }
            ]) ?? (generator?.bigint ?? $generator.bigint)(BigInt(3), BigInt(7)),
            equal: (generator?.customs ?? $generator.customs)?.bigint?.([
                {
                    name: "minimum",
                    value: "10"
                },
                {
                    name: "maximum",
                    value: "10"
                }
            ]) ?? (generator?.bigint ?? $generator.bigint)(BigInt(10), BigInt(10))
        });
        return $ro0();
    }