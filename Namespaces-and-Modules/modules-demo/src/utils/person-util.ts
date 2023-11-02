import { PersonDetails, PersonDetailsWithoutAge } from "../interfaces/Person";
import * as stringUtl from "./string-utils";

const tranformPersonNameToCapitalLetter = (
  person: PersonDetails | PersonDetailsWithoutAge
) => {
  const { name } = person;

  return {
    ...person,
    name: stringUtl.capitalizeFirstLetter(name),
  };
};

export default function xx123() {
  return 10;
}

export { tranformPersonNameToCapitalLetter as nameCapitalizer };
