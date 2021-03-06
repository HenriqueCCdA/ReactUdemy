import React from 'react';
import { Formik, useField }  from 'formik';
import * as yup from 'yup';

const Campo = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.error && meta.touched ? 'is-invalid': ''}
      />
      {meta.error && meta.touched ? (
        <div className='invalid-feedback'>{meta.error}</div>
      ): null}
    </div>
  );
};


const AdicionaCliente = () => {

  const esquema = yup.object({
    nome: yup.string()
      .required('O nome é obrigatorio')
      .min(10, 'O nome deve ter no mínimo 10 caracteres')
      .max(30, 'O nome deve ter no máximo 30 caracteres'),
    email: yup.string()
      .required('O email é obrigatorio')
      .email('O email é inválido'),
    nascimento: yup.date()
      .required('A data de nascimento é obrigatorio')
      .max(new Date(), 'Voce não pode nascido no futuro...')
  });

  return (
    <>
      <h1>Cadastro de Clientes</h1>

      <Formik
        initialValues={{ nome: 'João', email: '', nascimento: ''}}
        validationSchema={esquema}
        onSubmit={values => {
          alert(JSON.stringify(values));
        }}
      >
        { props => (
          <form onSubmit={props.handleSubmit} noValidate>
            <Campo type="text" id="nome" name="nome" label="Nome" />
            <Campo type="email" id="email" name="email" label="Email" />
            <Campo type="date" id="nascimento" name="nascimento" label="Data de nascimento"/>
            <button type="submit">Adicionar</button>
          </form>
        )}
      </Formik>

    </>
  );
};

export default AdicionaCliente;
