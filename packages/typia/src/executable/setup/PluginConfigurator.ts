import comments from "comment-json";
import fs from "fs";

import type { TypiaSetupWizard } from "../TypiaSetupWizard";

export namespace PluginConfigurator {
  const LEGACY_TRANSFORM = "typia/lib/transform";
  const TTSC_TYPIA_PLUGIN = "typia/lib/ttsc/plugin";

  export async function configure(
    args: TypiaSetupWizard.IArguments,
  ): Promise<void> {
    // GET COMPILER-OPTIONS
    const config: comments.CommentObject = comments.parse(
      await fs.promises.readFile(args.project!, "utf8"),
    ) as comments.CommentObject;
    const compilerOptions = config.compilerOptions as
      | comments.CommentObject
      | undefined;
    if (compilerOptions === undefined)
      throw new ReferenceError(
        `${args.project} file does not have "compilerOptions" property.`,
      );

    // PREPARE PLUGINS
    const plugins: comments.CommentArray<comments.CommentObject> = (() => {
      const plugins = compilerOptions.plugins as
        | comments.CommentArray<comments.CommentObject>
        | undefined;
      if (plugins === undefined) return (compilerOptions.plugins = [] as any);
      else if (!Array.isArray(plugins))
        throw new TypeError(
          `"plugins" property of ${args.project} must be array type.`,
        );
      return plugins;
    })();

    const strict: boolean | undefined = compilerOptions.strict as
      | boolean
      | undefined;
    const strictNullChecks: boolean | undefined =
      compilerOptions.strictNullChecks as boolean | undefined;
    const skipLibCheck: boolean | undefined = compilerOptions.skipLibCheck as
      | boolean
      | undefined;
    const filtered: comments.CommentObject[] = plugins.filter(
      (p) =>
        typeof p === "object" &&
        p !== null &&
        p.transform !== LEGACY_TRANSFORM &&
        p.transform !== TTSC_TYPIA_PLUGIN,
    ) as comments.CommentObject[];
    filtered.push({ transform: TTSC_TYPIA_PLUGIN } as comments.CommentObject);
    const changed: boolean =
      JSON.stringify(filtered) !== JSON.stringify(plugins) ||
      strictNullChecks === false ||
      (strict !== true && strictNullChecks !== true) ||
      skipLibCheck !== true;
    if (changed === false) return;

    // DO CONFIGURE
    compilerOptions.skipLibCheck = true;
    compilerOptions.strictNullChecks = true;
    if (strict === undefined && strictNullChecks === undefined)
      compilerOptions.strict = true;
    compilerOptions.plugins = filtered as any;
    await fs.promises.writeFile(
      args.project!,
      comments.stringify(config, null, 2),
    );
  }
}
