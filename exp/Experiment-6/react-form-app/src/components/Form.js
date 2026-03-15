import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../validation/validationSchema";

function Form() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("Form submitted successfully");
  };

  return (
    <div style={{padding:"20px"}}>
      <h2>React Form Validation</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label>Name:</label><br/>
          <input {...register("name")} />
          <p style={{color:"red"}}>{errors.name?.message}</p>
        </div>

        <div>
          <label>Email:</label><br/>
          <input {...register("email")} />
          <p style={{color:"red"}}>{errors.email?.message}</p>
        </div>

        <div>
          <label>Password:</label><br/>
          <input type="password" {...register("password")} />
          <p style={{color:"red"}}>{errors.password?.message}</p>
        </div>

        <div>
          <label>Age:</label><br/>
          <input type="number" {...register("age")} />
          <p style={{color:"red"}}>{errors.age?.message}</p>
        </div>

        <div>
          <label>Upload File:</label><br/>
          <input type="file" {...register("file")} />
        </div>

        <br/>

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default Form;