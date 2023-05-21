import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ProblemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="ac" source="ac" />
        <TextInput label="author" source="author" />
        <TextInput label="memory" source="memory" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
