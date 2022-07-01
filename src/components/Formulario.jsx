import React from 'react'
import Alerta from './Alerta'
import { Formik, Form, Field} from 'formik'
import * as Yup from 'yup'

//Formik es una libreria de formularios.
//Ayuda a crear los formularios y validarlos

//Lo que Formik toma como children es una funcion con toda la estructura del formulario.
//Esta funcion toma como parametro una variavle con toda la informacion de los parametros de
//Formik y lo que regresa la funcion debe de ser toda la estrucrura JSX del formulario.

//Los valores iniciales de los campos se ponen dentro del componente de Formik en la propidad de 
//"initialvalues" en forma de json. Cada atributo dentro del json va a funcionar como una variable
//la cual se relaciona con cada componente Field atravez del atributo "name" que tiene Field.

//Dentro del componente de Formik esta la propiedad de onSubmit que funciona de manera similar al
//onSubmit de un form regular. Este onSubmit toma como parametro una funcion que como parametro
//toma una variable la cual representa el json de initial values. Al cambiar los datos en los 
//Field gracias al atributo de name tambien se cambian los valores en el initial values

//Formik tambien tiene el componente de ErrorMessage pero si lo usamos no nos permite agregar 
//estilos css al mensaje.

//------------------------------------------------------------------------------------------------
//Yup es una libreria de validacion de formularios.

//En conjunto con Formik hacen gran equipo para el desarrollo de un formulario completo.

//Lo que hace Yup es crear un objeto de tipo Schema y Formik tiene el atributo de validationSchema
//entonces le pasamos a Formik el Schema con un json con los nombres de los campos del formulario
//y las validaciones de cada campo.

const Formulario = () => {
	const nuevoClienteSchema = Yup.object().shape({
		nombre:Yup.
			string().
			min(3, "El nombre es muy corto").
			max(20, "El nombre es muy largo").
			required("El nombre del ciente es obligatorio"),
		empresa:Yup.
			string().
			required("El nombre de la empresa es obligatorio"),
		email:Yup.
			string().
			email("Email no valido").
			required("El emaio es obligatorio"),
		telefono:Yup.
			number().
			positive("Numero no valido").
			integer("Numero no valido").
			typeError("El numero no es valido")
	})

	const handleSubmit = async(values) => {
		try {
			const url = "http://localhost:4000/clientes";

			const respuesta = await fetch(url, {
				method: "POST",
				body: JSON.stringify(values),
				headers: {
					"Content-Type": "application/json"
				}
			});

			const resultado = await respuesta.json();
			console.log(resultado);
		} catch (error) {
			cosole.log(error);
		}
	}

	return (
		<div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
			<h1 className="text-gray-600 font-bold text-xl uppercase text-center">Agregar nuevo cliente</h1>

			<Formik
				initialValues={
						{
							nombre:"",
							empresa:"",
							email:"",
							telefono:"",
							notas:""
						}
					}
					onSubmit={(values) => handleSubmit(values)}
					validationSchema={nuevoClienteSchema}
			>
				{({errors, touched}) => {
					
					return(
						<Form
							className="mt-10"
						>
							<div className="mb-4">
								<label
									className="text-gray-800"
									htmlFor="nombre"
									>Nombre:
								</label>
								<Field
									id="nombre"
									type="text"
									className="mt-2 block w-full p-3 bg-gray-50"
									placeholder="Nombre del cliente"
									name="nombre"
								/>
								{errors.nombre && touched.nombre ? (
									<Alerta>
										{errors.nombre}
									</Alerta>
								) :null}
							</div>
							<div className="mb-4">
								<label
									className="text-gray-800"
									htmlFor="empresa"
									>Empresa:
								</label>
								<Field
									id="empresa"
									type="text"
									className="mt-2 block w-full p-3 bg-gray-50"
									placeholder="Empresa del cliente"
									name="empresa"
									/>
									{errors.empresa && touched.empresa ? (
										<Alerta>
											{errors.empresa}
										</Alerta>
									) :null}
							</div>
							<div className="mb-4">
								<label
									className="text-gray-800"
									htmlFor="email"
									>E-mail:
								</label>
								<Field
									id="email"
									type="email"
									className="mt-2 block w-full p-3 bg-gray-50"
									placeholder="Email del cliente"
									name="email"
								/>
								{errors.email && touched.email ? (
										<Alerta>
											{errors.email}
										</Alerta>
									) :null}
							</div>
							<div className="mb-4">
								<label
									className="text-gray-800"
									htmlFor="telefono"
									>Telefono:
								</label>
								<Field
									id="telefono"
									type="tel"
									className="mt-2 block w-full p-3 bg-gray-50"
									placeholder="Telefono del cliente"
									name="telefono"
								/>
								{errors.telefono && touched.telefono ? (
										<Alerta>
											{errors.telefono}
										</Alerta>
									) :null}
							</div>
							<div className="mb-4">
								<label
									className="text-gray-800"
									htmlFor="notas"
									>Notas:
								</label>
								<Field
									as="textarea"
									id="notas"
									type="text"
									className="mt-2 block w-full p-3 bg-gray-50 h-40"
									placeholder="Notas del cliente"
									name="notas"
								/>
								{errors.notas && touched.notas ? (
										<Alerta>
											{errors.notas}
										</Alerta>
									) :null}
							</div>

							<input
								type="submit"
								value="agrear cliente"
								className="transition delay-75 duration-300 ease-in-out mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg cursor-pointer hover:shadow-xl hover:scale-y-105 hover:-translate-y-2"
							/>
						</Form>
					)}
				}
			</Formik>
		</div>
	)
}

export default Formulario