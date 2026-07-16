import assert from "assert";
import path from "path";

import { FileSystemIdentity } from "../../../../packages/typia/src/executable/FileSystemIdentity";

/**
 * Verifies modeled case-insensitive paths coalesce aliases consistently.
 *
 * Locks directory, explicit-file, target, declaration, and realpath decisions
 * to one filesystem policy even when the test host uses different semantics.
 *
 * 1. Model Windows paths as case-insensitive and compare differently cased names.
 * 2. Assert all path keys fold and uppercase declarations remain filtered.
 */
export function testCaseInsensitiveIdentity(): void {
  const identity = FileSystemIdentity.create(false, path.win32);
  assert.equal(
    identity.filesystemKey("C:\\src\\Foo.ts"),
    identity.filesystemKey("c:\\SRC\\foo.ts"),
  );
  assert.equal(
    identity.projectFileKey("src/Foo.ts"),
    identity.projectFileKey("SRC/foo.ts"),
  );
  assert.equal(
    identity.isSamePath("C:\\real\\Foo.ts", "c:\\REAL\\foo.ts"),
    true,
  );
  assert.equal(identity.isSupportedExtension("C:\\src\\Foo.TS"), true);
  assert.equal(identity.isDeclarationFile("C:\\src\\Foo.D.TS"), true);

  const policy = new FileSystemIdentity.Policy();
  policy.observe(false, "C:\\src");
  assert.throws(
    () => policy.observe(true, "D:\\output"),
    /inconsistent filesystem case behavior/,
  );
}
