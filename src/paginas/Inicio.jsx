import React from 'react'
import Cliente from '../components/Cliente';
import {useEffect, useState} from 'react'

const Inicio = () => {
	const [clientes, setClientes] = useState([]);

	useEffect(() => {
		const obtenerCientesAPI = async () => {
			try {
				const url = "http://localhost:4000/clientes";
				const respuesta = await fetch(url);
				const resultado = await respuesta.json();

				setClientes(resultado);
			} catch (error) {
				console.log(error);
			}
		}

		obtenerCientesAPI();
	},[]);

	return (
		<div>
			<h1 className="font-black text-4xl text-blue-900">Cliente</h1>
        	<p className="mt-3">Administra tus clientes</p>

			<table className="w-full mt-5 table-auto shadow bg-white">
				<thead className="bg-blue-800 text-white">
					<tr>
						<th className="p-2">Nombre</th>
						<th className="p-2">Contacto</th>
						<th className="p-2">Empresa</th>
						<th className="p-2">Acciones</th>
					</tr>
				</thead>
					{clientes.map(cliente => (<Cliente key={cliente.id} cliente={cliente}/>))}
				<tbody>

				</tbody>
			</table>
		</div>
	)
}

export default Inicio