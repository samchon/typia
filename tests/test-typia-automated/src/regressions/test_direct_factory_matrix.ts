import fs from "fs";

import { TestGlobal } from "../TestGlobal";
import { TestAutomationTemplate } from "../build/TestAutomationTemplate";

/**
 * Verifies every eligible template generates both a direct and a factory
 * matrix.
 *
 * `TestAutomationController` asks for the direct visit of each runtime template
 * and then for its factory visit, but a `create === false` early return used to
 * discard the first request. Twenty public operation families therefore shipped
 * only their `createX` half, and nothing failed to say so. This backstop reads
 * the controller's real output, so the same suppression cannot return
 * silently.
 *
 * 1. Receive the controller's completed locations from the ordinary suite run.
 * 2. Require both halves of every creatable template, and require the create-only
 *    Standard Schema family to still have no direct half.
 * 3. Require the two halves of a family to cover an identical structure set.
 *
 * @evidence contracts/testing.md#behavioral-verification This generator-output check asserts distinct direct/factory directories, required visits, absence of an unsupported direct Standard Schema half, nonempty direct families and exact fixture-name parity between supported halves. It reads the just-generated files, not committed source arrangement; actual native callback semantics execute in each generated case.
 * @evidence contracts/testing.md#independent-expectations Configured creatable/createOnly flags establish which invocation forms must exist, and the shared fixture-eligibility contract requires both halves to enroll the same declarations. The operation naming utility is shared with generation, so this check does not independently verify that utility's spelling against the public API.
 * @evidence contracts/testing.md#distinguishing-cases Every active operation contributes its required direct/factory distinction, including create-only Standard Schema; absent, empty, overlapping or unequal populations fail. Generated runtime assertions separately reject broken callback assembly and per-fixture behavior.
 * @evidence contracts/testing.md#execution-ownership main explicitly calls this matching exported regression after its single controller generation and before the suite worker starts. This helper owns local visit and filename-population checks and starts no second generator, compiler or worker; it is not counted as a generated feature by DynamicExecutor.
 */
export const test_direct_factory_matrix = async (
  locations: readonly string[],
): Promise<void> => {
  const location: string = `${TestGlobal.ROOT}/src/features`;
  const visited: Set<string> = new Set();
  for (const directory of locations) {
    if (directory.startsWith(`${location}/`))
      visited.add(directory.substring(location.length + 1));
  }

  const structures = (directory: string): string[] => {
    const prefix: string = `test_${directory.split(".").join("_")}_`;
    return fs
      .readdirSync(`${location}/${directory}`)
      .map((file) => {
        if (file.startsWith(prefix) === false || file.endsWith(".ts") === false)
          throw new Error(
            `Bug on TestAutomationController: unexpected file "${file}" in the "${directory}" feature set.`,
          );
        return file.substring(prefix.length, file.length - 3);
      })
      .sort();
  };

  let total: number = 0;
  for (const tpl of TestAutomationTemplate.DATA) {
    const direct: string = TestAutomationTemplate.directory(tpl, false);
    const factory: string = TestAutomationTemplate.directory(tpl, true);

    // THE TWO HALVES MUST BE DISTINCT BEFORE PARITY MEANS ANYTHING.
    //
    // Sharing one directory would let the factory half overwrite the direct one
    // and still satisfy every check below, because a feature set trivially
    // covers the same structures as itself.
    if (direct === factory)
      throw new Error(
        `Bug on TestAutomationController: the direct and factory halves of "${direct}" share one feature set.`,
      );

    if (tpl.createOnly === true) {
      if (visited.has(direct) === true)
        throw new Error(
          `Bug on TestAutomationController: the create-only template generated the direct "${direct}" feature set.`,
        );
      else if (visited.has(factory) === false)
        throw new Error(
          `Bug on TestAutomationController: the create-only "${factory}" feature set is missing.`,
        );
      continue;
    }

    if (visited.has(direct) === false)
      throw new Error(
        `Bug on TestAutomationController: the direct "${direct}" feature set is missing.`,
      );
    const names: string[] = structures(direct);
    if (names.length === 0)
      throw new Error(
        `Bug on TestAutomationController: the direct "${direct}" feature set is empty.`,
      );
    total += names.length;

    if (tpl.creatable === false) continue;
    else if (visited.has(factory) === false)
      throw new Error(
        `Bug on TestAutomationController: the "${factory}" feature set is missing.`,
      );

    const twins: string[] = structures(factory);
    if (
      names.length !== twins.length ||
      names.every((name, i) => name === twins[i]) === false
    )
      throw new Error(
        `Bug on TestAutomationController: "${direct}" and "${factory}" cover different structures.\n${JSON.stringify(
          {
            direct: names.filter((name) => twins.includes(name) === false),
            factory: twins.filter((name) => names.includes(name) === false),
          },
          null,
          2,
        )}`,
      );
  }
  if (total === 0)
    throw new Error(
      "Bug on TestAutomationController: not a single direct feature has been generated.",
    );
};
