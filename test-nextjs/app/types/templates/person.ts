import typia from 'typia';

type Person = {
	name: string;
	age: number;
};

export const validateParsePerson = typia.json.createValidateParse<Person>();
