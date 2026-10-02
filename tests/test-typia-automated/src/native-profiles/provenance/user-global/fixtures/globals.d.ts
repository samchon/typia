// Fixture copied from user_global_native_identity: userGlobalNativeIdentityGlobals.
// Declaration ownership and shape are the test input.
export {};

declare global {
  interface Blob {
    userBlobBrand: string;
  }
  class File {
    userBlobBrand: string;
    userFileBrand: string;
  }
}
