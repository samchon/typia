import { benchmark_assert_equals_iterate } from "./features/benchmark_assert_equals_iterate";
import { benchmark_assert_equals_throw } from "./features/benchmark_assert_equals_throw";
import { benchmark_assert_iterate } from "./features/benchmark_assert_iterate";
import { benchmark_assert_throw } from "./features/benchmark_assert_throw";
import { benchmark_equals } from "./features/benchmark_equals_throw";
import { benchmark_is } from "./features/benchmark_is";
import { benchmark_optimizer } from "./features/benchmark_optimizer";
import { benchmark_stringify } from "./features/benchmark_stringify";
import { benchmark_validate } from "./features/benchmark_validate";
import { benchmark_validate_equals } from "./features/benchmark_validate_equals";
import { BenchmarkReporter } from "./internal/BenchmarktReporter";
import { BenchmarkStream } from "./internal/BenhmarkStream";

async function main(): Promise<void> {
    const stream: BenchmarkStream = await BenchmarkReporter.initialize();
    const functors = [
        benchmark_is,
        benchmark_assert_iterate,
        benchmark_assert_throw,
        benchmark_validate,
        benchmark_equals,
        benchmark_assert_equals_iterate,
        benchmark_assert_equals_throw,
        benchmark_validate_equals,
        benchmark_optimizer as any,
        benchmark_stringify as any,
    ];
    for (const func of functors) {
        await BenchmarkReporter.measure(stream, func);
    }
    await stream.close();
}
main().catch((exp) => {
    console.log(exp);
    process.exit(1);
});
