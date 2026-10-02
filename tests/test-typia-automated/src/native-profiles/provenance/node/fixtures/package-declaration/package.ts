// Fixture copied from package_declaration_native_identity_is: packageDeclarationNativeIdentitySource.
// Declaration ownership and shape are the test input.
import type {
  Date as PackageDate,
  Map as PackageMap,
  Set as PackageSet,
  WeakMap as PackageWeakMap,
} from "native-name-package";
import typia from "typia";

interface LocalDate {
  stamp: number;
}
interface LocalMap<K, V> {
  brandMap: K;
  valueMap: V;
}
interface LocalSet<T> {
  brandSet: T;
}
interface LocalWeakMap<K extends object, V> {
  brandWeakMap: K;
  valueWeakMap: V;
}

type Assert<T extends true> = T;
type Same<X, Y> = [X] extends [Y] ? ([Y] extends [X] ? true : false) : false;
type _PackageDateIsLocal = Assert<Same<PackageDate, LocalDate>>;
type _PackageMapIsLocal = Assert<
  Same<PackageMap<string, number>, LocalMap<string, number>>
>;
type _PackageSetIsLocal = Assert<Same<PackageSet<string>, LocalSet<string>>>;
type _PackageWeakMapIsLocal = Assert<
  Same<PackageWeakMap<object, string>, LocalWeakMap<object, string>>
>;

export const isPackageDate = typia.createIs<PackageDate>();
export const isPackageMap = typia.createIs<PackageMap<string, number>>();
export const isPackageSet = typia.createIs<PackageSet<string>>();
export const isPackageWeakMap =
  typia.createIs<PackageWeakMap<object, string>>();
export const isLocalDate = typia.createIs<LocalDate>();
export const isLocalMap = typia.createIs<LocalMap<string, number>>();
export const isLocalSet = typia.createIs<LocalSet<string>>();
export const isLocalWeakMap = typia.createIs<LocalWeakMap<object, string>>();
