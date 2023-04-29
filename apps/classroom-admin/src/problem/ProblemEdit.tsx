import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ProblemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="memory" source="memory" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
