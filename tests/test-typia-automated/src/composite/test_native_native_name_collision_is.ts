import typia from "typia";

interface File {
  name: string;
  size: number;
}
interface Blob {
  size: number;
  type: string;
}
interface Filer {
  name: string;
}

const isFile = typia.createIs<File>();
const validateFile = typia.createValidate<File>();
const isBlob = typia.createIs<Blob>();
const isFiler = typia.createIs<Filer>();

const isDate = typia.createIs<Date>();
const isU8 = typia.createIs<Uint8Array>();
const fixture = { isFile, validateFile, isBlob, isFiler, isDate, isU8 };

/**
 * Verifies native name collision is in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original nativeNameCollisionSource
 * declarations; the former nativeNameCollisionRuntimeRunner observations
 * execute in the existing automated worker. This detects a generated program
 * whose output compiles but changes these runtime decisions: isFile valid;
 * isFile missing size; isFile missing name; isFile wrong size type; isFile
 * null; isFile primitive.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from nativeNameCollisionRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations Module-local File/Blob interfaces require their authored members, whereas genuine Date/Uint8Array types require actual runtime instances. Missing/wrong members and real-native-versus-user-shape controls independently distinguish those authorities.
 * @evidence contracts/testing.md#distinguishing-cases Preserves isFile valid; isFile missing size; isFile missing name; isFile wrong size type; isFile null; isFile primitive; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_native_name_collision_is in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed nativeNameCollisionSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/native_name_collision_is_transform_test.go nativeNameCollisionRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_native_name_collision_is = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  let ran: any = 0;
  const eq: any = (name: any, actual: any, expected: any): any => {
    ran += 1;
    if (actual !== expected) {
      throw new Error(name + ": expected " + expected + " but got " + actual);
    }
  };

  // A user interface named File must validate against its own members, not the
  // native File instanceof path (#2200 core cases).
  eq("isFile valid", mod.isFile({ name: "a", size: 1 }), true);
  eq("isFile missing size", mod.isFile({ name: "a" }), false);
  eq("isFile missing name", mod.isFile({ size: 1 }), false);
  eq("isFile wrong size type", mod.isFile({ name: "a", size: "1" }), false);
  eq("isFile null", mod.isFile(null), false);
  eq("isFile primitive", mod.isFile(5), false);

  // Validate retains structural acceptance and rejection. These observations
  // check success only and do not inspect its diagnostic expected string.
  eq(
    "validateFile valid",
    mod.validateFile({ name: "a", size: 1 }).success,
    true,
  );
  eq("validateFile invalid", mod.validateFile({ name: "a" }).success, false);

  // A user interface named Blob is structural too.
  eq("isBlob valid", mod.isBlob({ size: 1, type: "x" }), true);
  eq("isBlob missing type", mod.isBlob({ size: 1 }), false);
  eq("isBlob null", mod.isBlob(null), false);

  // A near-miss name that is not a native was always structural and stays so.
  eq("isFiler valid", mod.isFiler({ name: "a" }), true);
  eq("isFiler invalid", mod.isFiler({}), false);

  // Genuine natives keep their instanceof check and accept a real instance while
  // rejecting a plain object of the same shape.
  eq("isDate real", mod.isDate(new Date()), true);
  eq("isDate plain object", mod.isDate({}), false);
  eq("isDate null", mod.isDate(null), false);

  eq("isU8 real", mod.isU8(new Uint8Array(4)), true);
  eq("isU8 plain object", mod.isU8({}), false);
  eq("isU8 array", mod.isU8([1, 2, 3]), false);
  eq("isU8 null", mod.isU8(null), false);

  // A user File/Blob value is not a real native instance, and a real native is not
  // a user shape: the two classifications stay disjoint.
  eq("isFile rejects a real Date", mod.isFile(new Date()), false);
  eq(
    "isDate rejects a user File shape",
    mod.isDate({ name: "a", size: 1 }),
    false,
  );
  eq("isBlob rejects a real Date", mod.isBlob(new Date()), false);

  console.log("RAN " + ran + " CASES");

  if (ran !== 23) throw new Error("runtime case census changed: " + ran);
};
