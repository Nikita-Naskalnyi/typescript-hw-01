type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, "errors">;

const params: Params = {
  email: "user@mail.com",
  firstName: "Nikita",
  lastName: "Naskalnyi",
  phone: "1234567890",
};
export default params;