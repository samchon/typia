import comments from "comment-json";
import fs from "fs";

import { TypiaSetupWizard } from "../TypiaSetupWizard";

export namespace PluginConfigurator {
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
    const oldbie: comments.CommentObject | undefined = plugins.find(
      (p) =>
        typeof p === "object" &&
        p !== null &&
        p.transform === "typia/lib/transform",
    );
    if (
      strictNullChecks !== false &&
      (strict === true || strictNullChecks === true) &&
      oldbie !== undefined &&
      skipLibCheck === true
    )
      return;

    // DO CONFIGURE
    compilerOptions.skipLibCheck = true;
    compilerOptions.strictNullChecks = true;
    if (strict === undefined && strictNullChecks === undefined)
      compilerOptions.strict = true;
    if (oldbie === undefined)
      plugins.push(
        comments.parse(`
                        {
                            "transform": "typia/lib/transform"
                        }`) as comments.CommentObject,
      );
    await fs.promises.writeFile(
      args.project!,
      comments.stringify(config, null, 2),
    );
  }
}
