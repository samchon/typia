import fs from "fs";
import path from "path";

import { AssertionOracle } from "./AssertionOracle";
import { FeatureIdentity } from "./FeatureIdentity";
import { Git } from "./Git";

/**
 * Enforces maintained test-source constraints as static analysis.
 *
 * This is not runtime discovery or product-behavior evidence. Fixture-driven
 * analyzer tests remain separate from scanning the current tracked repository.
 *
 * @evidence contracts/common.md#principled-implementation The operation checks the declared feature identity, workspace-name and forbidden-oracle constraints against tracked source; population floors reject vacuous collection without claiming that static acceptance proves runtime execution.
 * @evidence contracts/common.md#clear-and-simple-design One enforcement operation combines existing analyzers with tracked source collection; the workspace-name decision is separately callable by fixture tests.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Static diagnostics do not replace behavioral tests or disable an oracle; every tracked selected source follows the same policy, and collection failures remain visible.
 * @evidence contracts/common.md#meaningful-documentation The namespace distinguishes static enforcement from runtime evidence, while check documents tracked input and the separate fixture-test ownership.
 */
export namespace RepositoryIntegrity {
  /**
   * Reports workspace names that do not match their directory identity.
   *
   * @evidence contracts/common.md#principled-implementation Each tracked tests workspace must use the declared @typia/directory policy so directory-based name filters cannot silently miss it; only mismatches produce diagnostics.
   * @evidence contracts/common.md#clear-and-simple-design A filter, one diagnostic mapping and sorting express the naming policy without filesystem access or runner state, making the decision independently testable.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Expected names follow one scope/directory rule for every workspace rather than a fixture-name allowlist or current manifest snapshot.
   * @evidence contracts/common.md#meaningful-documentation The function describes naming identity and returns diagnostic strings; the namespace explains that matching policy is static evidence rather than proof of pnpm execution.
   */
  export const diagnoseWorkspaceNames = (
    workspaces: Array<{
      path: string;
      directory: string;
      name: string;
    }>,
  ): string[] =>
    workspaces
      .filter((w) => w.name !== `@typia/${w.directory}`)
      .map(
        (w) =>
          `${w.path}: declares the name "${w.name}" but its directory demands "@typia/${w.directory}". "pnpm --filter" selects a workspace by package name and exits 0 when it matches nothing, so the two must agree.`,
      )
      .sort();

  /**
   * Checks tracked features, workspace names and assertion-oracle uses.
   *
   * Deleted working-tree files are ignored, matching their non-execution. The
   * original population floors remain collection backstops. Any diagnostic or
   * failed git invocation fails this static-analysis command.
   *
   * @evidence contracts/common.md#principled-implementation Existing analyzers interpret tracked maintained source and preserve deleted-file filtering; independent count floors reject empty collection, and combined diagnostics enforce every surviving source constraint.
   * @evidence contracts/common.md#clear-and-simple-design The command shares one tracked-path list between manifest and oracle scanning and delegates feature collection and each policy decision to its owning analyzer.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It retains the formerly mixed repository constraints without certifying them as runtime tests, suppressing diagnostics, altering foreign assertions or excluding newly introduced workspaces.
   * @evidence contracts/common.md#meaningful-documentation The comment records tracked-source ownership, deletion handling, collection floors and failure behavior; the namespace explicitly limits this command's evidentiary meaning.
   */
  export const check = (): void => {
    const root = Git.toplevel();
    const features = FeatureIdentity.collect(root);
    const tracked = Git.run(["ls-files", "-z", "--", "tests"], root)
      .split("\0")
      .filter((file) => fs.existsSync(path.join(root, file)));
    const workspaces = tracked
      .map((file) => /^tests\/([^/]+)\/package\.json$/.exec(file))
      .filter((match) => match !== null)
      .map((match) => ({
        path: match[0],
        directory: match[1]!,
        name: String(
          (
            JSON.parse(fs.readFileSync(path.join(root, match[0]), "utf8")) as {
              name?: unknown;
            }
          ).name ?? "",
        ),
      }));
    const sources = tracked.filter((file) =>
      /^tests\/[^/]+\/src\/.+\.ts$/.test(file),
    );
    if (features.length < 100 || workspaces.length < 10 || sources.length < 500)
      throw new Error(
        `Incomplete integrity population: ${features.length} features, ${workspaces.length} workspaces, ${sources.length} sources.`,
      );
    const diagnostics = [
      ...FeatureIdentity.diagnose(features),
      ...diagnoseWorkspaceNames(workspaces),
      ...sources.flatMap((file) =>
        AssertionOracle.find(
          fs.readFileSync(path.join(root, file), "utf8"),
        ).map((line) => `${file}:${line}: prohibited assertion oracle`),
      ),
    ];
    if (diagnostics.length) throw new Error(diagnostics.join("\n"));
  };
}
