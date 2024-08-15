import { defineCommand } from "citty";
import MagicString from "magic-string";
import process from "node:process";
import { detect } from "package-manager-detector";
import { type Agent, COMMANDS } from "package-manager-detector/agents";

import { run } from "../utils/command";
import { findTsConfig } from "../utils/confFiles";
import { findUp, readJsonFile, writeJsonFile } from "../utils/fs";
import { logger } from "../utils/logger";
import { bail } from "../utils/message";

const TSPATCH_COMMAND = `ts-patch install`;
const TYPIA_PATCH_COMMAND = `typia patch`;
const TYPIA_TRANSFORM = `typia/lib/transform`;

/** package.json type */
interface PackageJson {
  scripts?: Record<string, string>;
}

/** tsconfig.json type */
interface TSConfig {
  compilerOptions?: {
    strictNullChecks?: boolean;
    strict?: boolean;
    plugins?: {
      transform: string;
    }[];
  };
}

/** dependency type */
interface Dependency {
  dev: boolean;
  modulo: string;
  version: string;
}

export const setupCommand = defineCommand({
  meta: {
    name: "setup",
    description: "Setup Typia",
  },
  args: {
    project: {
      type: "string",
      description: "tsconfig.json file path",
      required: false,
    },
  },
  async run({ args }) {
    const cwd = process.cwd();
    const manager = await detect({ cwd });

    /* yarn@berry is not supported */
    if (manager.agent === "yarn@berry") {
      bail("yarn@berry is not supported.");
    }

    if (manager.agent == null) {
      const selected = await logger.prompt("Select a package manager", {
        initial: "npm",
        options: [
          { value: "yarn", label: "yarn (yarn@berry not supported)" },
          { value: "pnpm", label: "pnpm" },
          { value: "npm", label: "npm" },
          { value: "bun", label: "bun" },
        ] as const satisfies { value: Agent; label: string }[],
      });
      manager.agent = selected as Agent;
    }

    /* get commands table */
    const commands = COMMANDS[manager.agent];

    /* install dependencies */
    for (const dep of DEPENDENCIES) {
      run(
        commands.add.replace(
          "{0}",
          `${dep.modulo}@${dep.version} ${dep.dev ? "-D" : ""}`,
        ),
      );
    }

    /* === prepare package.json === */
    {
      const path = await findUp("package.json", { cwd });
      if (path == null) {
        bail("package.json not found.");
      }
      const json = await readJsonFile(path, cwd);
      const { data }: { data: PackageJson } = json;

      const prepare = (data?.scripts?.prepare as string | undefined) ?? "";
      const prepareS = new MagicString(prepare);

      prepareS.trim();

      const FULL_COMMAND = `${TSPATCH_COMMAND} && ${TYPIA_PATCH_COMMAND}`;

      /* if ony `ts-patch install` is found, add `typia patch` */
      prepareS.replace(TSPATCH_COMMAND, FULL_COMMAND);

      /* if prepare script is empty or does not include `typia patch`, prepend it */
      if (prepareS.length() === 0 || !prepare.includes(FULL_COMMAND)) {
        prepareS.prepend(`${FULL_COMMAND} && `);
      }

      /* update prepare script */
      json.modified.push([["scripts", "prepare"], prepareS.toString()]);
      await writeJsonFile(json);
    }

    /* === prepare tsconfig.json === */
    {
      const tsConfigPath = args.project ?? (await findTsConfig({ cwd }));
      /* if tsconfig.json is not found, create it */
      if (tsConfigPath == null) {
        run(`${commands.execute} tsc --init`);
      }

      const tsConfig = await readJsonFile(tsConfigPath, cwd);
      const data: TSConfig = tsConfig.data;

      tsConfig.modified.push([["compilerOptions", "strictNullChecks"], true]);
      tsConfig.modified.push([["compilerOptions", "strict"], true]);

      /* if plugins is not defined, create it */
      const plugins = data?.compilerOptions?.plugins ?? [];

      /* if typia/lib/transform is not found, add it */
      if (!plugins.some((p) => p.transform === TYPIA_TRANSFORM)) {
        plugins.push({ transform: TYPIA_TRANSFORM });
      }

      tsConfig.modified.push([["compilerOptions", "plugins"], plugins]);
      await writeJsonFile(tsConfig);
    }

    /* === run prepare script === */
    if (typeof commands.run === "string") {
      run(commands.run.replace("{0}", "prepare"));
    } else {
      commands.run(["prepare"]);
    }
  },
});

/** dependencies to be installed */
const DEPENDENCIES = [
  { dev: true, modulo: "typescript", version: "5.5.2" },
  { dev: true, modulo: "ts-patch", version: "latest" },
] as const satisfies Dependency[];
