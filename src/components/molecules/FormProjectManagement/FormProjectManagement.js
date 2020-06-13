import React, { Component } from 'react';
import formprojectmanagementSchema from './FormProjectManagement.schema';
import { FormWrapper } from './FormProjectManagement.style';
import { NewInput, Button } from '../../atoms';
import  ApiService  from '../../../api/Service'
import { Skeleton } from 'antd';

class FormProjectManagement extends Component {
    state = {
      isUserInfoLoaded: false,
      initialState: {
        title: '',
        description: '',
        hourPrice: '',
        duration: '',
        cost: '',
        status: '',
        creationDate: '',
        dueDate: '',
      },
    }
  
    async componentDidMount () {
      const { title, description, hourPrice, duration, cost, status, creationDate, dueDate } = await ApiService.getUserInfo();

    this.setState({
        initialState: {
            title, description, hourPrice, duration, cost, status, creationDate, dueDate
        },
        isUserInfoLoaded: true,
      });
    };

    onSubmitMethod = async (values, actions) => {

    };

    render() {
        return this.state.isUserInfoLoaded ? (
          <FormWrapper
            initialValues={this.state.initialState}
            validationSchema={formprojectmanagementSchema}
            onSubmit={this.onSubmitMethod}
          >
            {({ values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit, ...props }) => (
              <form onSubmit={handleSubmit}>
              <NewInput
            {...props}
            name="title"
            label="Título"
            placeholder="Insira o título do projeto"
            isLoading={isSubmitting}
            defaultValue={values.title}
            value={values.title}
            error={errors.title}
            touched={touched.title}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <NewInput
            {...props}
            name="description"
            label="Descrição"
            placeholder="Insira descrição do projeto"
            isLoading={isSubmitting}
            defaultValue={values.description}
            value={values.description}
            error={errors.description}
            touched={touched.description}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <NewInput
            {...props}
            name="hourPrice"
            label="Preço por Hora trabalhada"
            placeholder="Insira o valor da hora trabalhada"
            isLoading={isSubmitting}
            defaultValue={values.hourPrice}
            value={values.hourPrice}
            error={errors.hourPrice}
            touched={touched.hourPrice}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <NewInput
            {...props}
            name="duration"
            label="Duração"
            placeholder="Insira o tempo de duração do projeto"
            isLoading={isSubmitting}
            defaultValue={values.duration}
            value={values.duration}
            error={errors.duration}
            touched={touched.duration}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <NewInput
            {...props}
            name="cost"
            label="Custo do projeto"
            placeholder="Insira o custo do projeto"
            isLoading={isSubmitting}
            defaultValue={values.cost}
            value={values.cost}
            error={errors.cost}
            touched={touched.cost}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <NewInput
            {...props}
            name="status"
            label="Status do projeto"
            placeholder="Insira o status do projeto"
            isLoading={isSubmitting}
            defaultValue={values.status}
            value={values.status}
            error={errors.status}
            touched={touched.status}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <NewInput
            {...props}
            name="creationDate"
            label="Data de criação"
            placeholder="Insira a data de criação do projeto"
            isLoading={isSubmitting}
            defaultValue={values.creationDate}
            value={values.creationDate}
            error={errors.creationDate}
            touched={touched.creationDate}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <NewInput
            {...props}
            name="dueDate"
            label="Data final"
            placeholder="Insira a data final do projeto"
            isLoading={isSubmitting}
            defaultValue={values.dueDate}
            value={values.dueDate}
            error={errors.dueDate}
            touched={touched.dueDate}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
      
                <Button type="Cadastrar" isLoading={isSubmitting}>Atualizar</Button>
              </form>
            )}
          </FormWrapper>
        ) : (
          <Skeleton active/>
        )
      }
    }
    
    export default FormProjectManagement;
    