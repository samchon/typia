import PHYSICAL_CPU_COUNT from "physical-cpu-count";

import { benchmark_assert_equals_iterate } from "./features/benchmark_assert_equals_iterate";
import { benchmark_assert_equals_throw } from "./features/benchmark_assert_equals_throw";
import { benchmark_assert_iterate } from "./features/benchmark_assert_iterate";
import { benchmark_assert_throw } from "./features/benchmark_assert_throw";
import { benchmark_equals } from "./features/benchmark_equals_throw";
import { benchmark_is } from "./features/benchmark_is";
import { benchmark_optimizer } from "./features/benchmark_optimizer";
import { benchmark_stringify } from "./features/benchmark_stringify";
import { benchmark_stringify_server } from "./features/benchmark_stringify_server";
import { benchmark_validate } from "./features/benchmark_validate";
import { benchmark_validate_equals } from "./features/benchmark_validate_equals";
import { BenchmarkReporter } from "./internal/BenchmarktReporter";
import { BenchmarkStream } from "./internal/BenhmarkStream";

type Measurement = BenchmarkReporter.Measurement<any>;
interface Functor {
    (): Array<() => Measurement> | Array<() => Promise<Measurement>>;
    starter?: () => Promise<void>;
    terminator?: () => Promise<void>;
}

async function main(): Promise<void> {
    const stream: BenchmarkStream = await BenchmarkReporter.initialize();
    const functors: Functor[] = [
        benchmark_is,
        benchmark_assert_iterate,
        benchmark_assert_throw,
        benchmark_validate,
        benchmark_equals,
        benchmark_assert_equals_iterate,
        benchmark_assert_equals_throw,
        benchmark_validate_equals,
        benchmark_optimizer,
        benchmark_stringify,
        ...(PHYSICAL_CPU_COUNT >= 8 ? [benchmark_stringify_server] : []),
    ];

    for (const func of functors) {
        await BenchmarkReporter.measure(
            stream,
            func,
            func.starter,
            func.terminator,
        );
    }
    await stream.close();
}
main().catch((exp) => {
    console.log(exp);
    process.exit(1);
});
