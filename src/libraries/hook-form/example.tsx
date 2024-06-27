import "./styles.css";
import React from "react";
import { useForm } from "react-hook-form";

interface IFormValues {
  fullName: string;
  warName: string;
  gitHub: string;
  isDeveloper: boolean;
}

export const HookForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();

  const onSubmit = (data: IFormValues) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <h1>React Hook Form Test</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="fullName">Nome Completo</label>
          <input {...register("fullName")} placeholder="Lucas Corrêa" />
          {errors?.fullName && <p>{errors.fullName.message}</p>}
        </div>
        <div>
          <label htmlFor="warName">Nome de Guerra</label>
          <input {...register("warName")} placeholder="Suporte de Domingo" />
        </div>
        <div>
          <label htmlFor="gitHub">Github</label>
          <input {...register("gitHub")} placeholder="lucascorreaa" required />
        </div>
        <div>
          <label htmlFor="isDeveloper">É um desenvolvedor?</label>
          <input {...register("isDeveloper")} type="checkbox" />
        </div>
        <input type="submit" />
      </form>
      <a href="https://react-hook-form.com/" target="_blank">
        Documentaçao
      </a>
    </div>
  );
};
