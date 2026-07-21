import assert from "assert";
import fs from "fs";

import { FileSystemIdentity } from "../../../../packages/typia/src/executable/FileSystemIdentity";

/**
 * Verifies filesystem identity keys are exact rather than rounded.
 *
 * `fs.Stats.ino` is a JavaScript number, and an NTFS file ID is
 * `(sequenceNumber << 48) | mftRecordIndex`, so it routinely exceeds
 * `Number.MAX_SAFE_INTEGER` — 1879 of 4000 probed directories did — where the
 * spacing between representable doubles is 8. Two entries sharing a sequence
 * number with MFT record indices inside that spacing collapse to one double,
 * which is exactly what a tree created in one pass produces. The traversal
 * callers would then treat a distinct file as already visited and skip it with
 * no diagnostic. The identity is therefore read as a `bigint`.
 *
 * The pair below is chosen so the defect is unambiguous: both IDs sit between
 * 2^55 and 2^56 and differ by 2, which is inside the ulp of 8, so
 * `Number(a) === Number(b)` while `a !== b`. Deriving the key from the number
 * makes them one identity; deriving it from the `bigint` keeps them two.
 *
 * 1. Assert the premise — the two IDs collide as doubles and differ as bigints.
 * 2. Assert the keys built from them stay distinct.
 * 3. Assert one object still answers one key, so exactness did not break dedup.
 * 4. Assert the `ino === 0` fallback keys by path and ignores the device, with
 *    both rows able to fail.
 */
export function testInodePrecisionIdentity(): void {
  const dev: bigint = BigInt(2723597423);
  const first: bigint = BigInt("41658296553217950");
  const second: bigint = first + BigInt(2);

  // The premise, asserted rather than assumed: these are two objects that a
  // number-typed identity cannot tell apart.
  assert.notStrictEqual(first, second);
  assert.strictEqual(Number(first), Number(second));

  const stats = (
    ino: bigint,
    device: bigint = dev,
  ): Pick<fs.BigIntStats, "dev" | "ino"> => ({ dev: device, ino });

  assert.notStrictEqual(
    FileSystemIdentity.identityKey(stats(first), "/real/first.ts"),
    FileSystemIdentity.identityKey(stats(second), "/real/second.ts"),
  );

  // Exactness must not turn one object into two: the same identity reached
  // through two paths still answers one key.
  assert.strictEqual(
    FileSystemIdentity.identityKey(stats(first), "/real/first.ts"),
    FileSystemIdentity.identityKey(stats(first), "/alias/first.ts"),
  );

  // A filesystem reporting no inode falls back to the canonical path, so there
  // the path decides and the device does not. Both rows have to be able to fail:
  // one varies the path with the device fixed, the other varies the device with
  // the path fixed.
  assert.notStrictEqual(
    FileSystemIdentity.identityKey(stats(BigInt(0)), "/real/first.ts"),
    FileSystemIdentity.identityKey(stats(BigInt(0)), "/real/second.ts"),
  );
  assert.strictEqual(
    FileSystemIdentity.identityKey(stats(BigInt(0)), "/real/first.ts"),
    FileSystemIdentity.identityKey(
      stats(BigInt(0), dev + BigInt(1)),
      "/real/first.ts",
    ),
  );
}
