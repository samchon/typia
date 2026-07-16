import assert from "assert";
import path from "path";

import { FileSystemIdentity } from "../../../../packages/typia/src/executable/FileSystemIdentity";

/**
 * Verifies modeled case-sensitive paths retain distinct source identities.
 *
 * Locks behavior to the supplied filesystem model rather than the host OS, so
 * case-sensitive APFS and per-directory Windows settings use exact names.
 *
 * 1. Model POSIX paths as case-sensitive and compare directory and file inputs.
 * 2. Assert targets, project keys, declarations, and realpath keys stay exact.
 */
export function testCaseSensitiveIdentity(): void {
  const identity = FileSystemIdentity.create(true, path.posix);
  assert.notEqual(
    identity.filesystemKey("/src/Foo.ts"),
    identity.filesystemKey("/src/foo.ts"),
  );
  assert.notEqual(
    identity.projectFileKey("src/Foo.ts"),
    identity.projectFileKey("src/foo.ts"),
  );
  assert.equal(identity.isSamePath("/real/Foo.ts", "/real/foo.ts"), false);
  assert.equal(identity.isSupportedExtension("/src/Foo.TS"), false);
  assert.equal(identity.isDeclarationFile("/src/Foo.D.TS"), false);
}
