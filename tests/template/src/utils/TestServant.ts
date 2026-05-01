import { DynamicExecutor } from "@nestia/e2e";
import chalk from "chalk";

export class TestServant {
  public async execute(props: TestServant.IProps): Promise<Error[]> {
    const exceptions: Error[] = [];
    const report: DynamicExecutor.IReport = await DynamicExecutor.validate({
      prefix: "test_",
      location: props.location,
      parameters: () => [],
      onComplete: (exec: DynamicExecutor.IExecution) => {
        const trace = (str: string) =>
          console.log(`  - ${chalk.green(exec.name)}: ${str}`);
        if (exec.value === false) trace(chalk.gray("Pass"));
        else if (exec.error === null) {
          const elapsed: number =
            new Date(exec.completed_at).getTime() -
            new Date(exec.started_at).getTime();
          trace(`${chalk.yellow(elapsed.toLocaleString())} ms`);
        } else trace(chalk.red(exec.error.name));
      },
      filter: (name) =>
        (props.include.length
          ? props.include.some((str) => name.includes(str))
          : true) &&
        (props.exclude.length
          ? props.exclude.every((str) => !name.includes(str))
          : true),
      extension: __filename.substr(-2),
    });
    exceptions.push(
      ...report.executions.map((e) => e.error).filter((e) => e !== null),
    );
    return exceptions.map((err) => ({
      name: err.name,
      message: err.message,
      stack: err.stack,
    }));
  }
}
export namespace TestServant {
  export interface IProps {
    location: string;
    include: string[];
    exclude: string[];
  }
}
