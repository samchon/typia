import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type ArrayHierarchical = ArrayHierarchical.ICompany[];
export namespace ArrayHierarchical {
  export interface ICompany {
    id: number;
    serial: number;
    name: string;
    established_at: ITimestamp;
    departments: IDepartment[];
  }
  export interface IDepartment {
    id: number;
    code: string;
    sales: number;
    created_at: ITimestamp;
    employees: IEmployee[];
  }
  export interface IEmployee {
    id: number;
    name: string;
    age: number;
    grade: number;
    employed_at: ITimestamp;
  }
  export interface ITimestamp {
    time: number;
    zone: number;
  }

  export function generate(): ArrayHierarchical {
    return TestRandomGenerator.array(() => ({
      id: TestRandomGenerator.integer(),
      serial: TestRandomGenerator.integer(),
      name: TestRandomGenerator.string(),
      established_at: {
        time: TestRandomGenerator.integer(),
        zone: TestRandomGenerator.integer(),
      },
      departments: TestRandomGenerator.array(() => ({
        id: TestRandomGenerator.integer(),
        code: TestRandomGenerator.string(),
        sales: TestRandomGenerator.integer(),
        created_at: {
          time: TestRandomGenerator.integer(),
          zone: TestRandomGenerator.integer(),
        },
        employees: TestRandomGenerator.array(() => ({
          id: TestRandomGenerator.integer(),
          name: TestRandomGenerator.string(),
          age: TestRandomGenerator.integer(),
          grade: TestRandomGenerator.integer(),
          employed_at: {
            time: TestRandomGenerator.integer(),
            zone: TestRandomGenerator.integer(),
          },
        })),
      })),
    }));
  }

  export function trail(): ArrayHierarchical {
    const data = generate();
    const departments = data[data.length - 1]!.departments;
    const employees = departments[departments.length - 1]!.employees;
    employees[employees.length - 1] = {} as any;
    return data;
  }

  export const SPOILERS: Spoiler<ArrayHierarchical>[] = [
    (input) => {
      input[0]!.serial = "number" as any;
      return ["$input[0].serial"];
    },
    (input) => {
      input[0]!.departments[0]!.code = 3 as any as string;
      return ["$input[0].departments[0].code"];
    },
    (input) => {
      input[0]!.departments[0]!.employees[0]!.grade = "number" as any;
      return ["$input[0].departments[0].employees[0].grade"];
    },
    (input) => {
      input[0]!.departments[0]!.created_at.zone = "number" as any;
      return ["$input[0].departments[0].created_at.zone"];
    },
    (input) => {
      input[0]!.departments[0]!.employees[0] = {} as any;
      return [
        "$input[0].departments[0].employees[0].id",
        "$input[0].departments[0].employees[0].name",
        "$input[0].departments[0].employees[0].age",
        "$input[0].departments[0].employees[0].grade",
        "$input[0].departments[0].employees[0].employed_at",
      ];
    },
  ];

  export const BINARABLE = false;
}
