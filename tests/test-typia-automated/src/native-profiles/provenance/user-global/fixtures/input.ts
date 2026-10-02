// Fixture copied from user_global_native_identity: userGlobalNativeIdentitySource.
// Declaration ownership and shape are the test input.
import typia from "typia";

import type { ReexportedFile } from "./reexport";

type FileAlias = File;
type BrandedFile = File & { intersectionBrand: string };
type FileUnion = BrandedFile | { unionControl: boolean };
type NestedFile = { nestedHolder: File };

export const isFile = (input: unknown): boolean => typia.is<File>(input);
export const assertFile = (input: unknown): File => typia.assert<File>(input);
export const assertGuardFile = (input: unknown): void =>
  typia.assertGuard<File>(input);
export const validateFile = (input: unknown) => typia.validate<File>(input);
export const equalsFile = (input: unknown): boolean =>
  typia.equals<File>(input);
export const randomBlob = (): Blob => typia.random<Blob>();

export const createdIsBlob = typia.createIs<Blob>();
export const createdIsFile = typia.createIs<File>();
export const createdIsAlias = typia.createIs<FileAlias>();
export const createdIsReexported = typia.createIs<ReexportedFile>();
export const createdIsBranded = typia.createIs<BrandedFile>();
export const createdIsUnion = typia.createIs<FileUnion>();
export const createdIsNested = typia.createIs<NestedFile>();
