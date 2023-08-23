(generator) => {
    const $generator = typia_1.default.createRandom.generator;
    const $pick = typia_1.default.createRandom.pick;
    const $ro0 = (_recursive = false, _depth = 0) => ({
        id:
            (generator?.customs ?? $generator.customs)?.string?.([]) ??
            (generator?.string ?? $generator.string)(),
        name:
            (generator?.customs ?? $generator.customs)?.string?.([]) ??
            (generator?.string ?? $generator.string)(),
        age:
            (generator?.customs ?? $generator.customs)?.number?.([]) ??
            (generator?.number ?? $generator.number)(0, 100),
    });
    return (generator?.array ?? $generator.array)(() =>
        $pick([
            () =>
                new Set(
                    (generator?.array ?? $generator.array)(() =>
                        (generator?.boolean ?? $generator.boolean)(),
                    ),
                ),
            () =>
                new Set(
                    (generator?.array ?? $generator.array)(
                        () =>
                            (
                                generator?.customs ?? $generator.customs
                            )?.number?.([]) ??
                            (generator?.number ?? $generator.number)(0, 100),
                    ),
                ),
            () =>
                new Set(
                    (generator?.array ?? $generator.array)(
                        () =>
                            (
                                generator?.customs ?? $generator.customs
                            )?.string?.([]) ??
                            (generator?.string ?? $generator.string)(),
                    ),
                ),
            () =>
                new Set(
                    (generator?.array ?? $generator.array)(() =>
                        (generator?.array ?? $generator.array)(
                            () =>
                                (
                                    generator?.customs ?? $generator.customs
                                )?.number?.([]) ??
                                (generator?.number ?? $generator.number)(
                                    0,
                                    100,
                                ),
                        ),
                    ),
                ),
            () => new Set((generator?.array ?? $generator.array)(() => $ro0())),
        ])(),
    );
};
