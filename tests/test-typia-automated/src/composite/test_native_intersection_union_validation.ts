import typia from "typia";

type PartyWithRole = Party & PartyRoleInfo;
type Party = Individual | Corporation;

interface Individual {
  type: "individual";
  birthDate: Date;
}

interface Corporation {
  type: "corporation";
}

type PartyRoleInfo =
  | {
      partyRole: "customer";
    }
  | {
      partyRole: "other";
      otherPartyRole: string;
    };

const isParty = typia.createIs<PartyWithRole>();
const validateParty = typia.createValidate<PartyWithRole>();
const assertParty = typia.createAssert<PartyWithRole>();
const validateDirect = (input: unknown) => typia.validate<PartyWithRole>(input);

type DateSharedUnion =
  | {
      stamp: Date;
      left: string;
    }
  | {
      stamp: Date;
      right: string;
    };

type BytesSharedUnion =
  | {
      bytes: Uint8Array;
      left: string;
    }
  | {
      bytes: Uint8Array;
      right: string;
    };

type PrimitiveWrapperSharedUnion =
  | {
      value: string;
      left: string;
    }
  | {
      value: String;
      right: string;
    };

type TemplateSharedUnion =
  | {
      code: `id-${number}`;
      left: string;
    }
  | {
      code: `id-${string}`;
      right: string;
    };

type SetSharedUnion =
  | {
      items: Set<string>;
      left: string;
    }
  | {
      items: Set<number>;
      right: string;
    };

type MapSharedUnion =
  | {
      lookup: Map<string, number>;
      left: string;
    }
  | {
      lookup: Map<number, string>;
      right: string;
    };

type ArrayTupleSharedUnion =
  | {
      items: number[];
      left: string;
    }
  | {
      items: [number];
      right: string;
    };

type BigIntPrimitiveOrInterface = bigint | BigInt;
type BigIntLiteralOrInterface = 1n | BigInt;
type BigIntInterfaceOnly = BigInt;

const validateDateShared = typia.createValidate<DateSharedUnion>();
const validateBytesShared = typia.createValidate<BytesSharedUnion>();
const validatePrimitiveWrapperShared =
  typia.createValidate<PrimitiveWrapperSharedUnion>();
const validateTemplateShared = typia.createValidate<TemplateSharedUnion>();
const isTemplateShared = typia.createIs<TemplateSharedUnion>();
const assertTemplateShared = typia.createAssert<TemplateSharedUnion>();
const validateSetShared = typia.createValidate<SetSharedUnion>();
const validateMapShared = typia.createValidate<MapSharedUnion>();
const validateArrayTupleShared = typia.createValidate<ArrayTupleSharedUnion>();
const validateBigIntPrimitiveOrInterface =
  typia.createValidate<BigIntPrimitiveOrInterface>();
const validateBigIntLiteralOrInterface =
  typia.createValidate<BigIntLiteralOrInterface>();
const validateBigIntInterfaceOnly = typia.createValidate<BigIntInterfaceOnly>();
const isBigIntPrimitiveOrInterface =
  typia.createIs<BigIntPrimitiveOrInterface>();
const isBigIntLiteralOrInterface = typia.createIs<BigIntLiteralOrInterface>();
const isBigIntInterfaceOnly = typia.createIs<BigIntInterfaceOnly>();
const assertBigIntPrimitiveOrInterface =
  typia.createAssert<BigIntPrimitiveOrInterface>();
const assertBigIntLiteralOrInterface =
  typia.createAssert<BigIntLiteralOrInterface>();
const assertBigIntInterfaceOnly = typia.createAssert<BigIntInterfaceOnly>();
const fixture = {
  isParty,
  validateParty,
  assertParty,
  validateDirect,
  validateDateShared,
  validateBytesShared,
  validatePrimitiveWrapperShared,
  validateTemplateShared,
  isTemplateShared,
  assertTemplateShared,
  validateSetShared,
  validateMapShared,
  validateArrayTupleShared,
  validateBigIntPrimitiveOrInterface,
  validateBigIntLiteralOrInterface,
  validateBigIntInterfaceOnly,
  isBigIntPrimitiveOrInterface,
  isBigIntLiteralOrInterface,
  isBigIntInterfaceOnly,
  assertBigIntPrimitiveOrInterface,
  assertBigIntLiteralOrInterface,
  assertBigIntInterfaceOnly,
};

/**
 * Verifies intersection union validation in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * intersectionUnionValidationSource declarations; the former
 * intersectionUnionValidationRuntimeRunner observations execute in the existing
 * automated worker. This detects a generated program whose output compiles but
 * changes these runtime decisions: the literal runtime assertions below.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from intersectionUnionValidationRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations Each authored party value must satisfy both its selected individual/corporation arm and role arm. Invalid birthDate and missing other detail must reject without attributing an unrelated customer branch; native instances and neighboring shared-union alternatives have separately authored controls.
 * @evidence contracts/testing.md#distinguishing-cases Preserves the literal runtime assertions below; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_intersection_union_validation in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed intersectionUnionValidationSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/intersection_union_validation_transform_test.go intersectionUnionValidationRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_intersection_union_validation = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const capture: any = (task: any): any => {
    try {
      task();
      return null;
    } catch (error: any) {
      return error;
    }
  };

  const validIndividualOther: any = {
    type: "individual",
    birthDate: new Date("2025-06-10T10:43:59.087Z"),
    partyRole: "other",
    otherPartyRole: "some-valid-string",
  };
  const validCorporationCustomer: any = {
    type: "corporation",
    partyRole: "customer",
  };
  const validIndividualCustomer: any = {
    type: "individual",
    birthDate: new Date("2025-06-10T10:43:59.087Z"),
    partyRole: "customer",
  };
  const validCorporationOther: any = {
    type: "corporation",
    partyRole: "other",
    otherPartyRole: "some-valid-string",
  };
  const invalidOtherMissingDetail: any = {
    type: "individual",
    birthDate: new Date("2025-06-10T10:43:59.087Z"),
    partyRole: "other",
  };
  const invalidIndividualBirthDate: any = {
    type: "individual",
    birthDate: "2025-06-10T10:43:59.087Z",
    partyRole: "other",
    otherPartyRole: "some-valid-string",
  };

  const validate: any = mod.validateParty(validIndividualOther);
  if (validate.success !== true) {
    throw new Error(
      "valid individual/other intersection failed: " + JSON.stringify(validate),
    );
  }
  const direct: any = mod.validateDirect(validIndividualOther);
  if (direct.success !== true) {
    throw new Error(
      "direct validate failed for individual/other intersection: " +
        JSON.stringify(direct),
    );
  }
  if (mod.isParty(validIndividualOther) !== true) {
    throw new Error("is failed for valid individual/other intersection");
  }
  if (mod.assertParty(validIndividualOther) !== validIndividualOther) {
    throw new Error("assert did not return the valid individual/other value");
  }
  if (mod.validateParty(validCorporationCustomer).success !== true) {
    throw new Error("valid corporation/customer intersection failed");
  }
  for (const [name, input] of [
    ["individual/customer", validIndividualCustomer],
    ["corporation/other", validCorporationOther],
  ]) {
    if (mod.validateParty(input).success !== true) {
      throw new Error("valid " + name + " intersection failed validate");
    }
    if (mod.isParty(input) !== true) {
      throw new Error("valid " + name + " intersection failed is");
    }
    if (mod.assertParty(input) !== input) {
      throw new Error("valid " + name + " intersection failed assert");
    }
  }

  const invalid: any = mod.validateParty(invalidOtherMissingDetail);
  if (invalid.success !== false) {
    throw new Error("missing otherPartyRole unexpectedly passed");
  }
  if (mod.isParty(invalidOtherMissingDetail) !== false) {
    throw new Error("is accepted missing otherPartyRole");
  }
  if (
    invalid.errors.some(
      (entry: any): any =>
        entry.path === "$input.partyRole" && entry.expected === '"customer"',
    )
  ) {
    throw new Error(
      "invalid other branch reported unrelated customer branch: " +
        JSON.stringify(invalid),
    );
  }
  const invalidDirect: any = mod.validateDirect(invalidOtherMissingDetail);
  if (invalidDirect.success !== false) {
    throw new Error(
      "direct validate missing otherPartyRole unexpectedly passed",
    );
  }
  if (
    invalidDirect.errors.some(
      (entry: any): any =>
        entry.path === "$input.partyRole" && entry.expected === '"customer"',
    )
  ) {
    throw new Error(
      "direct validate invalid other branch reported unrelated customer branch: " +
        JSON.stringify(invalidDirect),
    );
  }
  const invalidAssert: any = capture((): any =>
    mod.assertParty(invalidOtherMissingDetail),
  );
  if (invalidAssert === null) {
    throw new Error("assert missing otherPartyRole unexpectedly passed");
  }
  if (
    invalidAssert.path === "$input.partyRole" &&
    invalidAssert.expected === '"customer"'
  ) {
    throw new Error(
      "assert invalid other branch reported unrelated customer branch: " +
        JSON.stringify(invalidAssert),
    );
  }
  const invalidDate: any = mod.validateParty(invalidIndividualBirthDate);
  if (invalidDate.success !== false) {
    throw new Error("invalid individual birthDate unexpectedly passed");
  }
  if (mod.isParty(invalidIndividualBirthDate) !== false) {
    throw new Error("is accepted invalid individual birthDate");
  }
  const invalidDateDirect: any = mod.validateDirect(invalidIndividualBirthDate);
  if (invalidDateDirect.success !== false) {
    throw new Error(
      "direct validate invalid individual birthDate unexpectedly passed",
    );
  }
  const invalidDateAssert: any = capture((): any =>
    mod.assertParty(invalidIndividualBirthDate),
  );
  if (invalidDateAssert === null) {
    throw new Error("assert invalid individual birthDate unexpectedly passed");
  }

  const validDateRight: any = {
    stamp: new Date("2025-06-10T10:43:59.087Z"),
    right: "selected-right",
  };
  const dateRight: any = mod.validateDateShared(validDateRight);
  if (dateRight.success !== true) {
    throw new Error(
      "shared Date native union failed its right branch: " +
        JSON.stringify(dateRight),
    );
  }
  if (
    mod.validateDateShared({
      stamp: "2025-06-10T10:43:59.087Z",
      right: "selected-right",
    }).success !== false
  ) {
    throw new Error(
      "shared Date native union accepted invalid right branch stamp",
    );
  }

  const validBytesRight: any = {
    bytes: new Uint8Array([1, 2, 3]),
    right: "selected-right",
  };
  const bytesRight: any = mod.validateBytesShared(validBytesRight);
  if (bytesRight.success !== true) {
    throw new Error(
      "shared Uint8Array native union failed its right branch: " +
        JSON.stringify(bytesRight),
    );
  }
  if (
    mod.validateBytesShared({
      bytes: [1, 2, 3],
      right: "selected-right",
    }).success !== false
  ) {
    throw new Error(
      "shared Uint8Array native union accepted invalid right branch bytes",
    );
  }

  const primitiveWrapperRight: any = mod.validatePrimitiveWrapperShared({
    value: "x",
    right: "selected-right",
  });
  if (primitiveWrapperRight.success !== true) {
    throw new Error(
      "shared primitive wrapper union failed its right branch: " +
        JSON.stringify(primitiveWrapperRight),
    );
  }
  if (
    mod.validatePrimitiveWrapperShared({
      value: 1,
      right: "selected-right",
    }).success !== false
  ) {
    throw new Error(
      "shared primitive wrapper union accepted invalid right branch value",
    );
  }

  const templateRight: any = mod.validateTemplateShared({
    code: "id-1",
    right: "selected-right",
  });
  if (templateRight.success !== true) {
    throw new Error(
      "shared template union failed its overlapping right branch: " +
        JSON.stringify(templateRight),
    );
  }
  if (
    mod.isTemplateShared({
      code: "id-1",
      right: "selected-right",
    }) !== true
  ) {
    throw new Error(
      "shared template union failed its overlapping right branch is",
    );
  }
  const templateAssertInput: any = {
    code: "id-1",
    right: "selected-right",
  };
  if (mod.assertTemplateShared(templateAssertInput) !== templateAssertInput) {
    throw new Error(
      "shared template union failed its overlapping right branch assert",
    );
  }
  if (
    mod.validateTemplateShared({
      code: "other-1",
      right: "selected-right",
    }).success !== false
  ) {
    throw new Error("shared template union accepted invalid right branch code");
  }
  if (
    mod.isTemplateShared({
      code: "other-1",
      right: "selected-right",
    }) !== false
  ) {
    throw new Error(
      "shared template union is accepted invalid right branch code",
    );
  }
  if (
    capture((): any =>
      mod.assertTemplateShared({
        code: "other-1",
        right: "selected-right",
      }),
    ) === null
  ) {
    throw new Error(
      "shared template union assert accepted invalid right branch code",
    );
  }

  const setRight: any = mod.validateSetShared({
    items: new Set(),
    right: "selected-right",
  });
  if (setRight.success !== true) {
    throw new Error(
      "shared empty Set union failed its right branch: " +
        JSON.stringify(setRight),
    );
  }
  if (
    mod.validateSetShared({
      items: new Set(["left-shaped"]),
      right: "selected-right",
    }).success !== false
  ) {
    throw new Error("shared Set union accepted invalid right branch value");
  }

  const mapRight: any = mod.validateMapShared({
    lookup: new Map(),
    right: "selected-right",
  });
  if (mapRight.success !== true) {
    throw new Error(
      "shared empty Map union failed its right branch: " +
        JSON.stringify(mapRight),
    );
  }
  if (
    mod.validateMapShared({
      lookup: new Map([["left-key", 1]]),
      right: "selected-right",
    }).success !== false
  ) {
    throw new Error("shared Map union accepted invalid right branch entry");
  }

  const arrayTupleRight: any = mod.validateArrayTupleShared({
    items: [1],
    right: "selected-right",
  });
  if (arrayTupleRight.success !== true) {
    throw new Error(
      "shared array/tuple union failed its right branch: " +
        JSON.stringify(arrayTupleRight),
    );
  }
  if (
    mod.validateArrayTupleShared({
      items: [1, 2],
      right: "selected-right",
    }).success !== false
  ) {
    throw new Error(
      "shared array/tuple union accepted invalid right branch item",
    );
  }

  for (const [name, validate, input] of [
    [
      "Date",
      mod.validateDateShared,
      { stamp: new Date("2025-06-10T10:43:59.087Z"), left: "selected-left" },
    ],
    [
      "Uint8Array",
      mod.validateBytesShared,
      { bytes: new Uint8Array([1, 2, 3]), left: "selected-left" },
    ],
    [
      "primitive wrapper",
      mod.validatePrimitiveWrapperShared,
      { value: "x", left: "selected-left" },
    ],
    [
      "template",
      mod.validateTemplateShared,
      { code: "id-1", left: "selected-left" },
    ],
    [
      "Set",
      mod.validateSetShared,
      { items: new Set(["left-shaped"]), left: "selected-left" },
    ],
    [
      "Map",
      mod.validateMapShared,
      { lookup: new Map([["left-key", 1]]), left: "selected-left" },
    ],
    [
      "array/tuple",
      mod.validateArrayTupleShared,
      { items: [1, 2], left: "selected-left" },
    ],
  ]) {
    const left: any = validate(input);
    if (left.success !== true) {
      throw new Error(
        "shared " +
          name +
          " union failed its left branch: " +
          JSON.stringify(left),
      );
    }
  }

  if (mod.validateBigIntPrimitiveOrInterface(1n).success !== true) {
    throw new Error("bigint primitive should pass bigint | BigInt validation");
  }
  if (mod.validateBigIntLiteralOrInterface(1n).success !== true) {
    throw new Error("bigint literal should pass 1n | BigInt validation");
  }
  const boxedBigInt: any = Object(1n);
  if (mod.validateBigIntInterfaceOnly(boxedBigInt).success !== true) {
    throw new Error("boxed BigInt should pass BigInt validation");
  }
  if (mod.validateBigIntInterfaceOnly(1n).success !== true) {
    throw new Error("primitive bigint should pass BigInt validation");
  }
  if (mod.validateBigIntPrimitiveOrInterface(boxedBigInt).success !== true) {
    throw new Error("boxed BigInt should pass bigint | BigInt validation");
  }
  if (mod.validateBigIntLiteralOrInterface(Object(2n)).success !== true) {
    throw new Error("boxed BigInt should pass 1n | BigInt validation");
  }
  if (mod.validateBigIntLiteralOrInterface(2n).success !== true) {
    throw new Error(
      "primitive bigint should pass 1n | BigInt validation through BigInt",
    );
  }
  if (mod.isBigIntPrimitiveOrInterface(1n) !== true) {
    throw new Error("bigint primitive should pass bigint | BigInt is");
  }
  if (mod.isBigIntLiteralOrInterface(1n) !== true) {
    throw new Error("bigint literal should pass 1n | BigInt is");
  }
  if (mod.isBigIntInterfaceOnly(boxedBigInt) !== true) {
    throw new Error("boxed BigInt should pass BigInt is");
  }
  if (mod.isBigIntInterfaceOnly(1n) !== true) {
    throw new Error("primitive bigint should pass BigInt is");
  }
  if (mod.isBigIntPrimitiveOrInterface(boxedBigInt) !== true) {
    throw new Error("boxed BigInt should pass bigint | BigInt is");
  }
  if (mod.isBigIntLiteralOrInterface(Object(2n)) !== true) {
    throw new Error("boxed BigInt should pass 1n | BigInt is");
  }
  if (mod.isBigIntLiteralOrInterface(2n) !== true) {
    throw new Error(
      "primitive bigint should pass 1n | BigInt is through BigInt",
    );
  }
  if (mod.assertBigIntPrimitiveOrInterface(1n) !== 1n) {
    throw new Error("bigint primitive should pass bigint | BigInt assert");
  }
  if (mod.assertBigIntLiteralOrInterface(1n) !== 1n) {
    throw new Error("bigint literal should pass 1n | BigInt assert");
  }
  if (mod.assertBigIntInterfaceOnly(boxedBigInt) !== boxedBigInt) {
    throw new Error("boxed BigInt should pass BigInt assert");
  }
  if (mod.assertBigIntInterfaceOnly(1n) !== 1n) {
    throw new Error("primitive bigint should pass BigInt assert");
  }
  if (mod.assertBigIntPrimitiveOrInterface(boxedBigInt) !== boxedBigInt) {
    throw new Error("boxed BigInt should pass bigint | BigInt assert");
  }
  const boxedBigIntTwo: any = Object(2n);
  if (mod.assertBigIntLiteralOrInterface(boxedBigIntTwo) !== boxedBigIntTwo) {
    throw new Error("boxed BigInt should pass 1n | BigInt assert");
  }
  if (mod.assertBigIntLiteralOrInterface(2n) !== 2n) {
    throw new Error(
      "primitive bigint should pass 1n | BigInt assert through BigInt",
    );
  }

  // NOTE: 2n is NOT a negative for 1n | BigInt: the BigInt arm absorbs every
  // bigint, so 2n is asserted as a positive above. Negatives must be non-bigint.
  const bigintNegatives: any = [
    ["string", "1"],
    ["number", 1],
    ["null", null],
    ["boxed Number", Object(1)],
  ];
  for (const [alias, validate, is, assert] of [
    [
      "bigint | BigInt",
      mod.validateBigIntPrimitiveOrInterface,
      mod.isBigIntPrimitiveOrInterface,
      mod.assertBigIntPrimitiveOrInterface,
    ],
    [
      "1n | BigInt",
      mod.validateBigIntLiteralOrInterface,
      mod.isBigIntLiteralOrInterface,
      mod.assertBigIntLiteralOrInterface,
    ],
    [
      "BigInt",
      mod.validateBigIntInterfaceOnly,
      mod.isBigIntInterfaceOnly,
      mod.assertBigIntInterfaceOnly,
    ],
  ]) {
    for (const [kind, input] of bigintNegatives) {
      if (validate(input).success !== false) {
        throw new Error(
          kind + " input unexpectedly passed " + alias + " validate",
        );
      }
      if (is(input) !== false) {
        throw new Error(kind + " input unexpectedly passed " + alias + " is");
      }
      if (capture((): any => assert(input)) === null) {
        throw new Error(
          kind + " input unexpectedly passed " + alias + " assert",
        );
      }
    }
  }
};
