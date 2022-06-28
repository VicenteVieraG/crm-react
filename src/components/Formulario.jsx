import React from 'react'
import { Formik, Form, Field } from 'formik'

//Formik es una libreria de formularios.
//Ayuda a crear los formularios y validarlos

//Los valores iniciales de los campos se ponen dentro del componente de Formik en la propidad de 
//"initialvalues" en forma de json. Cada atributo dentro del json va a funcionar como una variable
//la cual se relaciona con cada componente Field atravez del atributo "name" que tiene Field.

const Formulario = () => {
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
			>
				{()=>(
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
						</div>

						<input
							type="submit"
							value="agrear cliente"
							className="transition delay-75 duration-300 ease-in-out mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg cursor-pointer hover:shadow-xl hover:scale-y-105 hover:-translate-y-2"
						/>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default Formulario