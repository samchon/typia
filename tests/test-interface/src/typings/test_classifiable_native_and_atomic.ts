import { Classifiable } from "@typia/interface";

/**
 * Verifies `Classifiable<T>` preserves native classes and unwraps boxed
 * primitives.
 *
 * Pins the native and atomic branches: built-in classes (Date, typed arrays,
 * ArrayBuffer/DataView, Blob/File, RegExp) pass through unchanged so they can
 * be handed to the reconstructed instance as-is, boxed primitives collapse to
 * their value type (Boolean→boolean, Number→number, String→string), and bare
 * primitives (including `bigint`) round-trip through the identity guard.
 *
 * 1. Apply `Classifiable` to each native class and boxed/atomic type.
 * 2. Compare against the preserved native or unwrapped primitive.
 * 3. Confirm native members survive intact when nested inside a class.
 */
export type ClassifiableNativeAtomicCases = [
  // native classes preserved
  Assert<IsEqual<Classifiable<Date>, Date>>,
  Assert<IsEqual<Classifiable<RegExp>, RegExp>>,
  Assert<IsEqual<Classifiable<Uint8Array>, Uint8Array>>,
  Assert<IsEqual<Classifiable<Int16Array>, Int16Array>>,
  Assert<IsEqual<Classifiable<Float64Array>, Float64Array>>,
  Assert<IsEqual<Classifiable<ArrayBuffer>, ArrayBuffer>>,
  Assert<IsEqual<Classifiable<DataView>, DataView>>,
  Assert<IsEqual<Classifiable<Blob>, Blob>>,
  Assert<IsEqual<Classifiable<File>, File>>,
  // boxed primitives unwrap
  Assert<IsEqual<Classifiable<Boolean>, boolean>>,
  Assert<IsEqual<Classifiable<Number>, number>>,
  Assert<IsEqual<Classifiable<String>, string>>,
  // bare primitives round-trip
  Assert<IsEqual<Classifiable<boolean>, boolean>>,
  Assert<IsEqual<Classifiable<number>, number>>,
  Assert<IsEqual<Classifiable<string>, string>>,
  Assert<IsEqual<Classifiable<bigint>, bigint>>,
  Assert<IsEqual<Classifiable<123n>, 123n>>,
  Assert<IsEqual<Classifiable<"literal">, "literal">>,
  Assert<IsEqual<Classifiable<null>, null>>,
  Assert<IsEqual<Classifiable<undefined>, undefined>>,
  // native + boxed members inside a class
  Assert<IsEqual<Classifiable<Mixed>, ExpectedMixed>>,
];

type Assert<T extends true> = T;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;

class Mixed {
  when!: Date;
  bytes!: Uint8Array;
  pattern!: RegExp;
  flag!: Boolean;
  amount!: Number;
  label!: String;
  touch(): void {}
}

interface ExpectedMixed {
  when: Date;
  bytes: Uint8Array;
  pattern: RegExp;
  flag: boolean;
  amount: number;
  label: string;
}
