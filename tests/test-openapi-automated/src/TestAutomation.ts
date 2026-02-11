import { StringUtil } from "@typia/template";
import fs from "fs";

import { TestGlobal } from "./TestGlobal";

export namespace TestAutomation {
  export const generate = async (): Promise<void> => {
    const directories: string[] = [
      `${TestGlobal.ROOT}/src/features`,
      `${TestGlobal.ROOT}/src/features/validate`,
      `${TestGlobal.ROOT}/src/features/validateEquals`,
    ];
    for (const dir of directories) {
      if (fs.existsSync(dir))
        await fs.promises.rm(dir, { recursive: true, force: true });
      await fs.promises.mkdir(dir, { recursive: true });
    }

    for (const s of await getStructures(false)) await generateValidate(s);
    for (const s of await getStructures(true)) await generateValidateEquals(s);
  };

  const generateValidate = async (key: string): Promise<void> => {
    const content: string = StringUtil.trim`
      import { ${key} } from "@typia/template";
      import typia from "typia";

      import { _test_validate } from "../../internal/_test_validate";

      export const test_validate_${key} = () => _test_validate<${key}>({
        ...typia.json.schema<${key}>(),
        factory: ${key},
        name: "${key}",  
      });
    `;
    await fs.promises.writeFile(
      `${TestGlobal.ROOT}/src/features/validate/test_validate_${key}.ts`,
      content,
    );
  };

  const generateValidateEquals = async (key: string): Promise<void> => {
    const content: string = StringUtil.trim`
      import { ${key} } from "@typia/template";
      import typia from "typia";

      import { _test_validateEquals } from "../../internal/_test_validateEquals";

      export const test_validateEquals_${key} = () => _test_validateEquals<${key}>({
        ...typia.json.schema<${key}>(),
        factory: ${key},
        name: "${key}",  
      });
    `;
    await fs.promises.writeFile(
      `${TestGlobal.ROOT}/src/features/validateEquals/test_validateEquals_${key}.ts`,
      content,
    );
  };

  const getStructures = async (equals: boolean): Promise<string[]> => {
    const directory: string[] = await fs.promises.readdir(
      `${TestGlobal.ROOT}/../template/src/structures`,
    );
    const result: string[] = [];
    for (const file of directory) {
      if (
        file.endsWith(".ts") === false ||
        file === "index.ts" ||
        file === "TypeTagCustom.ts" ||
        file.startsWith("Comment") ||
        file.startsWith("ToJson")
      )
        continue;
      const content: string = await fs.promises.readFile(
        `${TestGlobal.ROOT}/../template/src/structures/${file}`,
        "utf-8",
      );
      if (
        content.includes("JSONABLE = false") ||
        content.includes("JSONABLE: boolean = false") ||
        content.includes("[key: ") ||
        content.includes("never") ||
        content.includes("toJSON") ||
        content.includes('<"uint32">') ||
        content.includes('<"uint64">') ||
        (equals === true && content.includes("ADDABLE = false"))
      )
        continue;
      result.push(file.substring(0, file.length - 3));
    }
    return result;
  };
}
