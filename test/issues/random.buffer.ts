import typia from "typia";

import { NativeSimple } from "../structures/NativeSimple";

console.log(typia.createRandom<NativeSimple>().toString());
for (let i: number = 0; i < 1000; ++i) typia.random<NativeSimple>();

// (generator) => {
//     const $generator = typia_1.default.createRandom.generator;
//     const $ro0 = (_recursive = false, _depth = 0) => ({
//         date: new Date((generator?.datetime ?? $generator.datetime)()),
//         uint8Array: new Uint8Array(
//             (generator?.array ?? $generator.array)(() =>
//                 (generator?.integer ?? $generator.integer)(0, 255),
//             ),
//         ),
//         uint8ClampedArray: new Uint8ClampedArray(
//             (generator?.array ?? $generator.array)(() =>
//                 (generator?.integer ?? $generator.integer)(0, 255),
//             ),
//         ),
//         uint16Array: new Uint16Array(
//             (generator?.array ?? $generator.array)(() =>
//                 (generator?.integer ?? $generator.integer)(0, 65535),
//             ),
//         ),
//         uint32Array: new Uint32Array(
//             (generator?.array ?? $generator.array)(() =>
//                 (generator?.integer ?? $generator.integer)(0, 4294967295),
//             ),
//         ),
//         bigUint64Array: new BigUint64Array(
//             (generator?.array ?? $generator.array)(() =>
//                 (generator?.bigint ?? $generator.bigint)(
//                     BigInt(0),
//                     BigInt(18446744073709552000),
//                 ),
//             ),
//         ),
//         int8Array: new Int8Array(
//             (generator?.array ?? $generator.array)(() =>
//                 (generator?.integer ?? $generator.integer)(-128, 127),
//             ),
//         ),
//         int16Array: new Int16Array(
//             (generator?.array ?? $generator.array)(() =>
//                 (generator?.integer ?? $generator.integer)(-32768, 32767),
//             ),
//         ),
//         int32Array: new Int32Array(
//             (generator?.array ?? $generator.array)(() =>
//                 (generator?.integer ?? $generator.integer)(
//                     -2147483648,
//                     2147483647,
//                 ),
//             ),
//         ),
//         bigInt64Array: new BigInt64Array(
//             (generator?.array ?? $generator.array)(() =>
//                 (generator?.bigint ?? $generator.bigint)(
//                     BigInt(-9223372036854776000),
//                     BigInt(9223372036854776000),
//                 ),
//             ),
//         ),
//         float32Array: new Float32Array(
//             (generator?.array ?? $generator.array)(() =>
//                 (generator?.number ?? $generator.number)(
//                     -1.175494351e38,
//                     3.4028235e38,
//                 ),
//             ),
//         ),
//         float64Array: new Float64Array(
//             (generator?.array ?? $generator.array)(() =>
//                 (generator?.number ?? $generator.number)(
//                     5e-324,
//                     1.7976931348623157e308,
//                 ),
//             ),
//         ),
//         arrayBuffer: new Uint8Array(
//             (generator?.array ?? $generator.array)(() =>
//                 (generator?.integer ?? $generator.integer)(0, 255),
//             ),
//         ).buffer,
//         sharedArrayBuffer: (() => {
//             const length = (generator?.integer ?? $generator.integer)();
//             const buffer = new SharedArrayBuffer(length);
//             const bytes = new Uint8Array(buffer);
//             bytes.set(
//                 (generator?.array ?? $generator.array)(
//                     () => (generator?.integer ?? $generator.integer)(0, 255),
//                     length,
//                 ),
//                 0,
//             );
//             return buffer;
//         })(),
//         dataView: new DataView(
//             new Uint8Array(
//                 (generator?.array ?? $generator.array)(() =>
//                     (generator?.integer ?? $generator.integer)(0, 255),
//                 ),
//             ).buffer,
//         ),
//     });
//     return $ro0();
// };
