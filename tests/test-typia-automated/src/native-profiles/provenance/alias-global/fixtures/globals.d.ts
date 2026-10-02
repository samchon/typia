// Fixture copied from user_global_native_identity: userGlobalNativeIdentityAliasGlobals.
// Declaration ownership and shape are the test input.
export {};

declare global {
  type Blob = { userBlobBrand: string };
  type File = { userBlobBrand: string; userFileBrand: string };
}
