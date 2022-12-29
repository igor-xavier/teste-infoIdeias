import "./style.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
function Form() {
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .matches("^[A-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÒÖÚÇÑ ]", {
        message: "O nome não pode conter números e/ou caracteres especiais",
      }),

    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),

    dataNasc: yup.string().required("Insira a data"),

    bairro: yup.string(),
    periodo: yup.string(),
    contato: yup.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  function onSubmitFunction() {}
  return (
    <div className="headerForm">
      <h3>Não encontrou o que procurava?</h3>
      <h3>Preencha o formulário e retornaremos o contato. </h3>

      <div className="div-form">
        <form onSubmit={handleSubmit(onSubmitFunction)} className="form">
          <p>Campos marcados com * são obrigatórios</p>
          <input placeholder="Nome completo*" {...register("name")} />
          {errors.name?.message}
          <input placeholder="E-mail*" {...register("email")} />
          {errors.email?.message}
          <input
            type="date"
            id="dataNasc"
            name="dataNascimento"
            min="1910-01-01"
            max="2022-12-31"
            {...register("dataNasc")}
          />
          {errors.dataNasc?.message}

          <select
            id="bairros"
            name="bairro"
            form="form"
            {...register("bairro")}
          >
            {/*Podendo ser criada uma função com arrays para utilizar os bairros
             que estão em algum banco ou API
            */}
            <option value="Bandeirantes">Bandeirantes</option>
            <option value="Barra da Tijuca">Barra da Tijuca</option>
            <option value="Botafogo">Botafogo</option>
            <option value="Campo Grande">Campo Grande</option>
            <option value="Copacabana">Copacabana</option>
            <option value="Flamengo">Flamengo</option>
            <option value="Ipanema">Ipanema</option>
            <option value="Jardim">Jardim</option>
            <option value="Laranjeiras">Laranjeiras</option>
            <option value="Santa Cruz">Santa Cruz</option>
          </select>

          <div>
            Período para contato:
            <input
              type="radio"
              name="Manhã"
              id="manha"
              {...register("periodo")}
            />
            <label for="manha">Manhã</label>
            <input
              type="radio"
              name="Tarde"
              id="tarde"
              {...register("periodo")}
            />
            <label for="tarde">Tarde</label>
            <input
              type="radio"
              name="Noite"
              id="noite"
              {...register("periodo")}
            />
            <label for="noite">Noite</label>
          </div>
          <div>
            Autoriza contato por telefone?
            <input
              type="radio"
              name="contato"
              id="sim"
              {...register("contato")}
            />
            <label for="Sim">Sim</label>
            <input
              type="radio"
              name="contato"
              id="nao"
              {...register("contato")}
            />
            <label for="nao">Não</label>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
export default Form;
