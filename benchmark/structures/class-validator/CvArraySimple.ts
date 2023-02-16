import * as tr from "class-transformer";
import * as cv from "class-validator";

export class CvArraySimple {
    @cv.IsString()
    name!: string;

    @cv.IsString()
    email!: string;

    @cv.ValidateNested({ each: true })
    @cv.IsArray()
    @cv.IsObject()
    @tr.Type(() => CvHobby)
    hobbies!: CvHobby[];
}

class CvHobby {
    @cv.IsString()
    name!: string;

    @cv.IsNumber()
    rank!: number;

    @cv.IsString()
    body!: string;
}
