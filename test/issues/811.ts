import typia, { tags } from "typia";

interface UpdateUserDto {
  email: string & tags.Format<"email"> & tags.MaxLength<20>;
  dateOfBirth: string & tags.Format<"date">;
}

console.log(
  typia.validateEquals<UpdateUserDto>({
    dateOfBirth: "2023-11-10",
    email: "123@gmail.com",
  }),
);
